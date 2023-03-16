package sesacmybatis.sesac.mybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesacmybatis.sesac.mybatis.domain.User;
import sesacmybatis.sesac.mybatis.domain.UserEntity;
import sesacmybatis.sesac.mybatis.dto.UserDTO;
import sesacmybatis.sesac.mybatis.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {

    @Autowired
    MainService mainService;



    /*----- 회원가입 페이지로 이동 -----*/
    @GetMapping("/join")
    public String Join(){
        return "join";
    }


    /*---- 회원가입 로직 -----*/
    @PostMapping("/axios/dto/join")
    @ResponseBody
    public String axiosDTOAPIJoin(@RequestBody UserDTO UserDTO){
        UserEntity user = new UserEntity();

        user.setUserId(UserDTO.getUserId());
        user.setUserPw(UserDTO.getUserPw());
        user.setUserNickname(UserDTO.getUserNickname());

        mainService.addUser(user);

        String msg = UserDTO.getUserNickname() + "님 회원가입이 완료됐습니다";
        System.out.println(UserDTO.getUserNickname());
        return msg;
    }

    /*---- 로그인페이지로 이동 -----*/
    @GetMapping("/login")
    public String Login(){
        return "login";
    }

    /*---- 로그인로직-----*/
    @PostMapping("/axios/dto/login")
    @ResponseBody
    public User axiosDTOAPILogin(@RequestBody UserDTO UserDTO){
        User user = mainService.Login(UserDTO);

        return user;
    }


    /*회원정보 수정 페이지로 이동*/
    @PostMapping("/edit")
    public String edit(@RequestBody @RequestParam String userId, @RequestBody @RequestParam String userNickname, Model model){
        System.out.print(userId);
        model.addAttribute("userId", userId);
        model.addAttribute("userNickname", userNickname);
        return "edit";
    }

    /*실제 수정하는 로직*/
    @PostMapping("/nicknameEdit")
    public String nicknameEdit(@RequestBody @RequestParam String userId, @RequestBody @RequestParam String userNickname, Model model){
        mainService.Edit(userId, userNickname);
        model.addAttribute("userId", userId);
        model.addAttribute("userNickname", userNickname);
        return "userInfo";
    }

    /*----- 탈퇴로직 -----*/
    @PostMapping("/deleteAccount")
    public String deleteAccount(@RequestBody @RequestParam String userId){
        mainService.Delete(userId);
        return "login";
    }

    /*회원정보 페이지로 이동*/
    @PostMapping("/userInfo")
    public String getUserInfo(UserDTO user, Model model){ //DTO라서 requestparam X
        model.addAttribute("userId", user.getUserId());
        model.addAttribute("userNickname", user.getUserNickname());
        return "userInfo";
    }



    /*실습 X */
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
