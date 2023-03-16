package sesacmybatis.sesac.mybatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesacmybatis.sesac.mybatis.domain.BoardEntity;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {


}
