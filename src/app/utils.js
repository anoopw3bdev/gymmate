export const getAvatar = (name="") => {
    return name[0] || ""
}

export const getMembershipColor = (type) => {
    switch (type) {
        case "Platinum":
            return "bg-gray-200"
        case "Gold":
            return "bg-yellow-300"
        default:
            return "bg-gray-400"
    }
}