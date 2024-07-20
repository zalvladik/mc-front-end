import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { FETCH_URL } from 'src/constants'

import DefaultInput from 'src/components/inputs/DefaultInput'

const LiqPay = (): JSX.Element => {
  const [username, setUsername] = useState<string>()

  const handleusernameChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setUsername(String(event.target.value))

  interface Window {
    LiqPayCheckout?: {
      init: (config: {
        data: string
        signature: string
        embedTo: string
        language: string
        mode: string
      }) => {
        on: (event: string, callback: (data: any) => void) => any
      }
    }
  }

  useEffect(() => {
    const scriptId = 'liqpay-script'

    const fetchPaymentData = async (): Promise<void> => {
      const win = window as Window

      try {
        if (!win.LiqPayCheckout) {
          return
        }

        const response = await fetch(`${FETCH_URL}/liqpay`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'France',
          }),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const { data, signature } = await response.json()

        if (win.LiqPayCheckout) {
          win.LiqPayCheckout.init({
            data,
            signature,
            embedTo: '#liqpay_checkout',
            language: 'uk',
            mode: 'embed',
          })
            .on('liqpay.callback', () => {})
            .on('liqpay.ready', () => {})
            .on('liqpay.close', () => {
              // close
            })
        }
      } catch (error) {
        // console.log(error)
      }
    }

    const addScript = (): void => {
      const existingScript = document.getElementById(scriptId)

      if (!existingScript) {
        const script = document.createElement('script')
        script.id = scriptId
        script.src = '//static.liqpay.ua/libjs/checkout.js'
        script.async = true

        script.onload = () => {
          fetchPaymentData()
        }

        document.body.appendChild(script)
      } else {
        fetchPaymentData()
      }
    }

    addScript()

    return () => {
      const existingScript = document.getElementById(scriptId)

      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <>
      <DefaultInput
        type="text"
        style={{
          fontSize: 20,
          display: 'flex',
          margin: '30px auto 20px auto',
          textAlign: 'center',
        }}
        rightIcon={false}
        value={username}
        onChange={handleusernameChange}
        placeholder="Вкажіть ваш нікнейм"
        required
      />
      <div id="liqpay_checkout" />
    </>
  )
}

export default LiqPay
