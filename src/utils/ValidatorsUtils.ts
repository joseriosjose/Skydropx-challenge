
export const handleOnlyNumber = (size?: number) => (name: string) => {
    if (!/[0-9]/g.test(name)) return false
    if (size && name.length > size) return false
    return true
}