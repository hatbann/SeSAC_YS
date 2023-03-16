package sesacmybatis.sesac.mybatis.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="board")
@Getter
@Setter
public class BoardEntity {

    @Id
    @GeneratedValue
    private int id;

    @Column(length = 10, nullable = false)
    private String writer;

    @Column(length = 100, nullable = false)
    private String content;
}
