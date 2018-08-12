export const nextMonth = (today) => ({
    type: 'NEXT',
    today,
})

export const prevMonth = (today) => ({
    type: 'PREV',
    today,
})