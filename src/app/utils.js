export const getAvatar = (name="") => {
    return name[0] || ""
}

export const getMembershipColor = (type) => {
    switch (type) {
        case "Platinum":
            return "bg-teal-600"
        case "Gold":
            return "bg-orange-400"
        default:
            return "bg-gray-400"
    }
}