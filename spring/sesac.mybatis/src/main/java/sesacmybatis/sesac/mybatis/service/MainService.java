package sesacmybatis.sesac.mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacmybatis.sesac.mybatis.domain.User;
import sesacmybatis.sesac.mybatis.dto.UserDTO;
import sesacmybatis.sesac.mybatis.mapper.MainMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {

    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList(){
        List<User> result = mainMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<UserDTO>();

        for(int i = 0; i<result.size(); i++){
            UserDTO user = new UserDTO();
            user.setUserId(result.get(i).getUserId());
            user.setUserPw(result.get(i).getUserPw());
            user.setUserNickname(result.get(i).getUserNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return  users;
    }

    public User Login(UserDTO userDTO){
        return mainMapper.findUser(userDTO);
    }
    public void addUser(User user) {mainMapper.insertUser(user);}
}
