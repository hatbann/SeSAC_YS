package sesacmybatis.sesac.mybatis.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="user")
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue
    private int id; // id primary key auto_increment

    @Column(length = 10, nullable = false, name="user_id")
    private String userId;

    @Column(length = 10, nullable = false, name="user_pw")
    private String userPw;

    @Column(length = 10, nullable = false, name = "user_nickname")
    private String userNickname;

}
