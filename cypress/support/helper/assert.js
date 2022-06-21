export const contains = (sel, text) => {
    sel.should('contains.text', text)
}

export const eq = (sel, text) => {
    sel.should('eq', text)
} 