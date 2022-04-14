
export const handleOnlyNumber = (size?: number) => (name: string) => {
    if (!name) return true
    if (!/^[0-9]*$/.test(name)) return false
    if (size && name.length > size) return false
    return true

}