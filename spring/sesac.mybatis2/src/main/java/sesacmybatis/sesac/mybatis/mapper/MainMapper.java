package sesacmybatis.sesac.mybatis.mapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import sesacmybatis.sesac.mybatis.domain.User;
import sesacmybatis.sesac.mybatis.dto.UserDTO;

import java.util.List;

@Mapper
public interface MainMapper {
    //mapper 참고하기
    List<User> retrieveAll();
    User findUser(UserDTO userDTO);
    //mapper 참고 안 하기
    @Insert("insert into user(userId, userPw, userNickname) values(#{userId}, #{userPw} , #{userNickname})")
    void insertUser(User user);
    //전달받은 user객체에 있는 name과 nickname을 가져온다

    @Update("UPDATE user SET userNickname = #{userNickname} WHERE userId = #{userId}")
    void update(UserDTO userDTO);

    @Delete("DELETE FROM user WHERE userId = #{userId}")
    void delete(String userId);

}
