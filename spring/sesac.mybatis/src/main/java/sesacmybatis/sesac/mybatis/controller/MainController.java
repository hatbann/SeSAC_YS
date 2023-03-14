package sesacmybatis.sesac.mybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesacmybatis.sesac.mybatis.domain.User;
import sesacmybatis.sesac.mybatis.dto.UserDTO;
import sesacmybatis.sesac.mybatis.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;



    /*----- 회원가입 -----*/
    @GetMapping("/join")
    public String Join(){
        return "join";
    }


    @PostMapping("/axios/dto/join")
    @ResponseBody
    public String axiosDTOAPIJoin(@RequestBody UserDTO UserDTO){
        User user = new User();

        user.setUserId(UserDTO.getUserId());
        user.setUserPw(UserDTO.getUserPw());
        user.setUserNickname(UserDTO.getUserNickname());

        mainService.addUser(user);

        String msg = UserDTO.getUserNickname() + "님 회원가입이 완료됐습니다";
        System.out.println(UserDTO.getUserNickname());
        return msg;
    }

    /*---- 로그인 -----*/
    @GetMapping("/login")
    public String Login(){
        return "login";
    }

    @PostMapping("/axios/dto/login")
    @ResponseBody
    public User axiosDTOAPILogin(@RequestBody UserDTO UserDTO){
        User user = mainService.Login(UserDTO);

        return user;
    }


    /*회원정보 수정*/
    @PostMapping("/edit")
    public String edit(@RequestBody @RequestParam String userId, @RequestBody @RequestParam String userNickname, Model model){
        System.out.print(userId);
        model.addAttribute("userId", userId);
        model.addAttribute("userNickname", userNickname);
        return "edit";
    }

    /*
    @PostMapping("/axios/dto/edit")
    @ResponseBody
    public String axiosVOAPIEdit(@RequestBody UserDTO UserDTO){
        UserDTO user = new UserDTO2("혜빈", "23", "1234");
        String msg = "수정 전 이름 : " + user.getUsername() + "\n수정 전 비밀번호 : " + user.getPw() + "\n수정 전 나이 : " + user.getAge();
        user.setUsername(UserDTO2.getUsername());
        user.setAge(UserDTO2.getAge());
        user.setPw(UserDTO2.getPw());
        msg += "\n--------------------------------------";

        msg += "\n수정 후 이름 : " + user.getUsername() + "\n수정 후 비밀번호 : " + user.getPw() + "\n수정 후 나이 : " + user.getAge();
        return msg;
    }
*/
    @PostMapping("/userInfo")
    public String getUserInfo(UserDTO user, Model model){ //DTO라서 requestparam X
        model.addAttribute("userId", user.getUserId());
        model.addAttribute("userNickname", user.getUserNickname());
        return "userInfo";
    }


    @GetMapping("/users")
    public String getUsers(Model model){
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("/error")
    public String Error(){
        return "error";
    }





}
