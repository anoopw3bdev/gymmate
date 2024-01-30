export const getFirstLetter = (name="") => {
    return name[0] || ""
}

export const getMembershipColor = (type) => {
    switch (type) {
        case "Platinum":
            return "border-teal-600"
        case "Gold":
            return "border-orange-400"
        default:
            return "border-gray-400"
    }
}