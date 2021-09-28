const InputGroupRadio = () => {
  return (
    <div className='input-group-radio'>
      <label className='label-radio' htmlFor='cash'>
        Efectivo
      </label>
      {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
      <input
        type='radio'
        name='paymentType'
        id='cash'
        value='cash'
        //checked={paymentType === 'cash'}
        //={handlePaymentType}
      />
      <label className='label-radio' htmlFor='cashOnDelivery'>
        Contra reembolso
      </label>

      <input
        type='radio'
        name='paymentType'
        id='cashOnDelivery'
        value='cashOnDelivery'
        //checked={paymentType === 'cashOnDelivery'}
        //onChange={handlePaymentType}
      />
    </div>
  );
};
export default InputGroupRadio;
