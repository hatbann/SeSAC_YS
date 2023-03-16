package sesacmybatis.sesac.mybatis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesacmybatis.sesac.mybatis.domain.BoardEntity;
import sesacmybatis.sesac.mybatis.dto.BoardDTO;
import sesacmybatis.sesac.mybatis.service.BoardService;

import java.util.ArrayList;

@Controller
public class BoardController {

    @Autowired
    BoardService boardService;

    @GetMapping("/board")
    public String getBoard(Model model){
       ArrayList<BoardDTO> boardList = (ArrayList<BoardDTO>) boardService.getBoardContents();
       model.addAttribute("contents", boardList);
        return "board";
    }

    @GetMapping("/write")
    public String writePage(){
        System.out.print("here");
        return "write";
    }

    @PostMapping("/submit")
    @ResponseBody
    public BoardEntity submitContent(@RequestParam String writer, @RequestParam String content){
        BoardEntity board = new BoardEntity();
        board.setContent(content);
        board.setWriter(writer);
        boardService.addContent(board);

        return board;
    }
}
