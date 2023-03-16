package sesacmybatis.sesac.mybatis.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacmybatis.sesac.mybatis.domain.BoardEntity;
import sesacmybatis.sesac.mybatis.dto.BoardDTO;
import sesacmybatis.sesac.mybatis.mapper.BoardMapper;
import sesacmybatis.sesac.mybatis.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Autowired
    private BoardRepository boardRepository;

    public List<BoardDTO> getBoardContents(){
        List<BoardEntity> result = boardRepository.findAll();
        List<BoardDTO> boardList = new ArrayList<>();

        for(int i = 0; i<result.size(); i++){
            BoardDTO boardDTO = new BoardDTO();
            boardDTO.setId(result.get(i).getId());
            boardDTO.setWriter(result.get(i).getWriter());
            boardDTO.setContent(result.get(i).getContent());
            boardDTO.setNo(i+1);

            boardList.add(boardDTO);
        }
        return boardList;
    }

    public void addContent(BoardEntity content){boardRepository.save(content);}


}
