export const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateAppointment = (state) => {
    // Ukupna cena usluga
    state.itemsPrice = addDecimal(
        state.appointmentItems.reduce(
            (acc, item) => acc + item.price * item.qty,
            0
        )
    );

    // Dodatni troškovi
    state.additionalPrice = addDecimal(
        state.itemsPrice > 10000 ? 0 : 500
    );

    // Porez
    state.taxPrice = addDecimal(
        Number((0.15 * state.itemsPrice).toFixed(2))
    );

    // Ukupna cena
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.additionalPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem(
        'appointment',
        JSON.stringify(state)
    );

    return state;
};