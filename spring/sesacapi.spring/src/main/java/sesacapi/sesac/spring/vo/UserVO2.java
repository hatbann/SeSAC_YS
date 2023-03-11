package sesacapi.sesac.spring.vo;

import java.util.List;

public class UserVO2 {
    private String name;
    private String gender;
    private String year;
    private String month;
    private String day;

    private List<String> interest;

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public String getYear() {
        return year;
    }

    public String getMonth() {
        return month;
    }

    public String getDay() {
        return day;
    }

    public List<String> getInterest() {
        return interest;
    }
}
