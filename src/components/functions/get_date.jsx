export default function GetCurrentDate() {
    const currentDate = new Date();
    return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
}
