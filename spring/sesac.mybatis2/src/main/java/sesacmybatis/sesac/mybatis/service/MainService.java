package sesacmybatis.sesac.mybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacmybatis.sesac.mybatis.domain.User;
import sesacmybatis.sesac.mybatis.domain.UserEntity;
import sesacmybatis.sesac.mybatis.dto.UserDTO;
import sesacmybatis.sesac.mybatis.mapper.MainMapper;
import sesacmybatis.sesac.mybatis.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {

    @Autowired
    private MainMapper mainMapper;
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUserList(){
        List<UserEntity> result = userRepository.findAll();
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


    public ArrayList<UserDTO> getUserNickname(String userNickname){
        Optional<UserEntity> user = userRepository.findByUserNickname(userNickname);
        ArrayList<UserDTO> userList = new ArrayList<>();

        if(user.isPresent()){
            UserDTO dto = new UserDTO();
            dto.setUserId(user.get().getUserId());
            dto.setUserNickname(user.get().getUserNickname());
            dto.setUserPw(user.get().getUserPw());
            dto.setNo(0);

            userList.add(dto);
        }

        return userList;
    }


    public User Login(UserDTO userDTO){
        return mainMapper.findUser(userDTO);
    }

    public void Edit(String userId, String userNickname){
        UserDTO user = new UserDTO();
        user.setUserNickname(userNickname);
        user.setUserId(userId);
        mainMapper.update(user);
    }

    public void Delete(String userId){
        mainMapper.delete(userId);
    }
    public void addUser(UserEntity user) {userRepository.save(user);}
}
