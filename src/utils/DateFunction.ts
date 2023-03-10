import moment from 'moment'

export function getCurrentMonthDateRange(){
    
    const month = getCurrentMonth()

    const year = getCurrentYear()

    const startDate = `${year}-${month}-01 00:00:00`

    const finishDate = `${year}-${month}-31 23:59:59`

    return {startDate, finishDate}
}

export function getCurrentYear(){
    const today = new Date()
    const year = today.getFullYear()
    return year.toString()
}

export function getCurrentMonth(){
    const today = new Date()
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    return month
}

export function formatDateToBR(date: string): string{
    try {
        const formattedDate = moment(date).locale('pt-br').format('DD/MM/YYYY HH:mm:ss')

        return formattedDate

    }catch(error){
        console.log(error)
        return date
    }
}