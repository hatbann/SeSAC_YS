package sesacmybatis.sesac.mybatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesacmybatis.sesac.mybatis.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    Optional<UserEntity> findByUserNickname(String userNickname);

    // UserEntity userEntity
    // Optional<UserEntity> user; user.get()으로 불러야함, null 인 객체를 확인하기 위함
}
