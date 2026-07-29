reports = [

    {
        "id":1,
        "name":"Network Performance Report",
        "type":"Performance",
        "period":"Last 24 Hours",
        "status":"Completed",
        "devices":25,
        "uptime":"99.8%",
        "incidents":2,
        "created":"Today 10:30 AM"
    },


    {
        "id":2,
        "name":"Security Analysis Report",
        "type":"Security",
        "period":"Last 7 Days",
        "status":"Completed",
        "devices":40,
        "uptime":"99.2%",
        "incidents":5,
        "created":"Yesterday"
    },


    {
        "id":3,
        "name":"Device Health Report",
        "type":"Health",
        "period":"Last 30 Days",
        "status":"Processing",
        "devices":65,
        "uptime":"98.9%",
        "incidents":8,
        "created":"3 days ago"
    },


    {
        "id":4,
        "name":"Monthly Infrastructure Report",
        "type":"Infrastructure",
        "period":"Monthly",
        "status":"Completed",
        "devices":120,
        "uptime":"99.5%",
        "incidents":3,
        "created":"1 week ago"
    }

]





def get_all_reports():

    return reports






def get_report_by_id(report_id):


    for report in reports:


        if report["id"] == report_id:

            return report



    return None






def get_report_summary():


    total = len(reports)



    completed = len(

        [

            report for report in reports

            if report["status"]=="Completed"

        ]

    )



    processing = len(

        [

            report for report in reports

            if report["status"]=="Processing"

        ]

    )



    avg_uptime = "99.3%"



    return {


        "total":total,

        "completed":completed,

        "processing":processing,

        "uptime":avg_uptime


    }







def generate_report(report_type):


    new_report = {


        "id":len(reports)+1,

        "name":f"{report_type} Report",

        "type":report_type,

        "period":"Custom",

        "status":"Processing",

        "devices":0,

        "uptime":"-",

        "incidents":0,

        "created":"Just now"

    }



    reports.append(new_report)



    return {


        "message":"Report generation started",

        "report":new_report

    }