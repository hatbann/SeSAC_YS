package sesacapi.sesac.spring.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesacapi.sesac.spring.dto.UserDTO2;
import sesacapi.sesac.spring.dto.UserDto;
import sesacapi.sesac.spring.vo.UserVO;
import sesacapi.sesac.spring.vo.UserVO2;
import sesacapi.sesac.spring.vo.UserVO3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@Controller
public class MainController {


    @GetMapping("/")
    public String main(){
        //return "request";
        //return "dtoRequest";
        //return "voRequest";
       // return "axiosRequest";
        return "axiosCRUD";
    }

    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(required = true) String name, Model model){ //@RequestParam("name") String name2)처럼도 가능
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(required = false) String name, Model model){ //required가 false라서 넘어감, true면 안넘아감
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @GetMapping({"/get/response4/{name}/{age}", "/get/response4/{name}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }


    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody //html을 찾는게 아닌 res.send처럼 값을 전달한다는 의미0
    public String postAPI3(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    /*실습*/
    @GetMapping("/introduce/{name}")
    public String practice1(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/introduce2/{name}/{age}")
    public String practice2(@PathVariable String name, @PathVariable String age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @PostMapping("/post/practice3")
    public String practice3(@RequestParam String name, @RequestParam String gender, @RequestParam String year, @RequestParam String month, @RequestParam String day, @RequestParam List<String> interest, Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("day", day);
        String temp = "";
    for(int i = 0; i< interest.size(); i++){
        if(i == interest.size() - 1){
            temp += interest.get(i);
        }
        else{
            temp += interest.get(i) + ",";
        }
    }
        model.addAttribute("interest", temp);
        return "response";
    }


    /* -------------DTO-----------------*/

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dto1(UserDto userDto){
        String msg = userDto.getName() + userDto.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dto2(UserDto userDto){
        String msg = userDto.getName() + " " +userDto.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dto3(@RequestBody UserDto userDto){
        String msg = userDto.getName() + " " +userDto.getAge() + "!!!";
        return msg;
    }

    /* -------------VO-----------------*/
    @GetMapping("/vo/response1")
    @ResponseBody
    public String vo1(UserVO userVO){
        String msg = userVO.getName() + userVO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/vo/response2")
    @ResponseBody
    public String vo2(UserVO userVO){
        String msg = userVO.getName() + userVO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/vo/response3")
    @ResponseBody
    public String vo3(@RequestBody UserVO userVO){
        String msg = userVO.getName() + " " +userVO.getAge() + "!!!";
        return msg;
    }



    /* -------------DTO AXIOS-----------------*/
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDto userDto){
        String msg = "이름 : " + userDto.getName() + "\n나이 : " +userDto.getAge();
        return msg;
    }

    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDto userDto){
        String msg = "이름 : " + userDto.getName() + "\n나이 : " +userDto.getAge();
        return msg;
    }

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDto userDto){
        String msg = "이름 : " + userDto.getName() + "\n나이 : " +userDto.getAge();
        return msg;
    }


    /* -------------VO AXIOS-----------------*/
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVOAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVOAPI2(UserVO UserVO){
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " +UserVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVOAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이 : " + age;
        return msg;
    }

    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVOAPI4(UserVO UserVO){
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " +UserVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVOAPI5(@RequestBody UserVO UserVO){
        String msg = "이름 : " + UserVO.getName() + "\n나이 : " +UserVO.getAge();
        return msg;
    }


    /*실습2*/

    @PostMapping("/axios/vo/response6")
    @ResponseBody
    public String axiosVOAPI6(@RequestBody UserVO2 UserVO2){
    /*String msg = "이름 : " + UserVO2.getName() + "\n성별 : " +UserVO2.getGender() + " " + UserVO2.getYear() + " " +
            UserVO2.getMonth() + UserVO2.getDay() + UserVO2.getInterest();
            ;

     */
        String msg = UserVO2.getName() + "회원가입 성공";
    return msg;
    }



    //회원가입 : POST요청
    @PostMapping("/axios/vo/join")
    @ResponseBody
    public String axiosVOAPIJoin(@RequestBody UserVO3 UserVO3){
        String msg = "아이디 : " + UserVO3.getId() + " 비밀번호 : " + UserVO3.getPw() + " 이름 : " + UserVO3.getUsername();
        return msg;
    }

    //로그인 : POST요청이 낫다고함
    @PostMapping("/axios/vo/login")
    @ResponseBody
    public String axiosVOAPILogin(@RequestBody UserVO3 UserVO3){
        String msg = UserVO3.getId() + "로그인 성공";
        return msg;
    }

    //정보수정 : POST요청
    @PostMapping("/axios/dto/edit")
    @ResponseBody
    public String axiosVOAPIEdit(@RequestBody UserDTO2 UserDTO2){
        UserDTO2 user = new UserDTO2("혜빈", "23", "1234");
        String msg = "수정 전 이름 : " + user.getUsername() + "\n수정 전 비밀번호 : " + user.getPw() + "\n수정 전 나이 : " + user.getAge();
        user.setUsername(UserDTO2.getUsername());
        user.setAge(UserDTO2.getAge());
        user.setPw(UserDTO2.getPw());
        msg += "\n--------------------------------------";

        msg += "\n수정 후 이름 : " + user.getUsername() + "\n수정 후 비밀번호 : " + user.getPw() + "\n수정 후 나이 : " + user.getAge();
        return msg;
    }

    //회원탈퇴 : POST요청
    @PostMapping("/axios/dto/delete")
    @ResponseBody
    public String axiosVOAPIDelete(@RequestBody UserVO3 userVO3){
        /*ArrayList<UserVO3> userArr = new ArrayList<>();
        userArr.add(userVO3);

         */
        String msg = userVO3.getUsername() + " 탈퇴완료";
        return msg;
    }

}
