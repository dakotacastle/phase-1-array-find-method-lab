const superbowlWin = (array) => {
    const obj = array.find((record) => record.result === "W")
    if (obj !== undefined) {
        return obj.year
    } else {
        return undefined
    }
}
