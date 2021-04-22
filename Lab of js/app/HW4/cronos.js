function cronos(year,month,day) {
    year<500 ? sum = Math.trunc(year/5)-Math.trunc(year/100):(year%500==0&&month<=2&&day<=31) ? sum = Math.trunc(year/5)+Math.trunc(year/500)-Math.trunc(year/100)-1:
    sum = Math.trunc(year/5)+Math.trunc(year/500)-Math.trunc(year/100);
    count = (year-1)*360 + (month-1)*30+day+sum;
    switch(count %7)
    {
        case 0 : {return "Saturday";
        break;
        }
        case 1 : {return "Sunday";
        break;
        }
        case 2 : {return "Monday";
        break;
        }
        case 3 : {return "Tuesday";
        break;
        }
        case 4 : {return "Wednesday";
        break;
        }
        case 5 : {return "Thursday";
        break;
        }
        case 6 : {return "Friday";
        break;
        }
    }
}