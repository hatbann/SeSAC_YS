package sesacmybatis.sesac.mybatis.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacmybatis.sesac.mybatis.domain.BoardEntity;
import sesacmybatis.sesac.mybatis.dto.BoardDTO;
import sesacmybatis.sesac.mybatis.mapper.BoardMapper;
import sesacmybatis.sesac.mybatis.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public BoardDTO getBoardById(int id) {
        Optional<BoardEntity> board = boardRepository.findById(id);
        BoardDTO boardDTO = new BoardDTO();
        if ( board.isPresent() ){
            boardDTO.setId(board.get().getId());
            boardDTO.setContent(board.get().getContent());
            boardDTO.setWriter(board.get().getWriter());
        }
        return boardDTO;
    }

    public void updateBoard(BoardDTO boardDTO) {
        BoardEntity board = new BoardEntity();
        board.setId(boardDTO.getId());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());

        boardRepository.save(board);
    }

    public void addContent(BoardEntity content){boardRepository.save(content);}

    public void deleteBoard(int Id) {
        boardRepository.deleteById(Id);
    }

}
