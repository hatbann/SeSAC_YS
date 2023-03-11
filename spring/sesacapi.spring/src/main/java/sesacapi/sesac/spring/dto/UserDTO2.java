package sesacapi.sesac.spring.dto;

public class UserDTO2 {
    private String username;
    private String age;
    private String pw;

    public String getUsername() {
        return username;
    }

    public UserDTO2(String username, String age, String pw) {
        this.username = username;
        this.age = age;
        this.pw = pw;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }
}
