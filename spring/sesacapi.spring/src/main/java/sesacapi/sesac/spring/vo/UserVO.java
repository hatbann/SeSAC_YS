package sesacapi.sesac.spring.vo;

public class UserVO {
    private String name;
    private String age;

    //VO는 set 없어야함
    public String getName() {
        return name;
    }

    public String getAge() {
        return age;
    }
}
