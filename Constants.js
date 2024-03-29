
const latinYear=["MESKEREM","TIKIMTI","HIDAR","TAHSAS","TIRI","LEKATIT","MEGABIT","MIYAZYA","GINBOT","SENE","HAMLE","NEHASE","PAGUMIE"]
const geezYear=["መሰሮ","ጢቂምት","ሂዳር","መሼ","ኢንቶጎት","መንገስ","ወቶ","መዜ","አስሬ","ሰኜ","አምሌ","ናሴ","ቃቅሜ"]
const latinWeek=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const geezWeek =["ግድር","ኡጠት","መገር","አርጴ","ከምስ","ጂማት","አንሰ"];
class Constants{

    constructor(locale){
        this.locale=locale;
        this.setDaysOfWeek();
        this.setMonthsOfYear();
    }
        
    // we are setting Locale here in Calendar so that the GeezDate class handles only data prtaining to Date object.
    setLocale(locale){
        this.locale=locale;
        this.setDaysOfWeek();
        this.setMonthsOfYear();
    }
    setMonthsOfYear(){
        if(this.locale=="iso"){
            this.months=latinYear;
        } else{
            this.months=geezYear;
        }
    }
    setDaysOfWeek(){
        if(this.locale=="iso"){
            this.week= latinWeek;
        } else{
            this.week=geezWeek;
        }
    }
    getDayOfWeek(value){
        return this.week[value];
    }

    getMonth(month){
        return this.months[month-1];
    }
}