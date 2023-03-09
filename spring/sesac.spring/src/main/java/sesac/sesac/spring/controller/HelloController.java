package sesac.sesac.spring.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class HelloController {

    @GetMapping("/hi") //app.get 과 같음, get방식
    public String getHi(Model model){
        model.addAttribute("msg1", "Hi!");
        model.addAttribute("msg2", "<strong style=\"color: red\">Bye~</strong>");

        model.addAttribute("age" , 19);

        return "hi"; //res.render("hi") => hi라는 파일이 없으면 에러, 이 파일을 templates에 위치해야함
    }

    @GetMapping("/people")
    public String People(Model model){

        ArrayList<Person> people = new ArrayList<>();
        people.add(new Person("kim", 23));
        people.add(new Person("lee", 25));
        people.add(new Person("cho", 19));
        people.add(new Person("choi", 17));

        model.addAttribute("people", people);

        return "people";
    }

}
