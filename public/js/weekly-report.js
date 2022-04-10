
async function weeklyReport(){

    const reportData = await fetcher('GET', 'weekly-report')

    console.log(reportData[2].congress);

}

weeklyReport()