import type { ChangeEvent } from 'react'
import { useState } from 'react'

import DefaultInput from 'src/components/inputs/DefaultInput'

const LiqPay = (): JSX.Element => {
  const [username, setUsername] = useState<string>()

  const handleusernameChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setUsername(String(event.target.value))

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
