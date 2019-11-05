# Vue Router

- https://router.vuejs.org/kr/
- https://router.vuejs.org/


### Router
- 웹페이지간의 '이동'
- <details>
    <summary>Vue SPA 제작에 유용한 라우팅 라이브러리</summary>
    <br>
    <p>클라이언트가 요청을 주고~~~~, 서버가 html 리턴해주고~~~~, 브라우저가 받아가지고 렌더링 하고 블라블라블라.....</p>
    <strong>해당화면에 대한 정보를 미리 갖고 있다가 클라이언트 내부적으로 라우터를 이용해서 매끄럽게 전환.  </strong>
  </details>
-  ```js
    var routes = [{
      path: '/user',
      name: 'User',
      component: UserComponent
    }]
    ```


### Nested Router
- www.~~~~/peoplelife/it-team/something
- children: [ ]
- ```HTML
  <router-view></router-view>
  ```


### Dynamic Router
- user/:id
- user?id=


### Params
- this.$route.params.???

### Templates (HTML)
-  ```HTML
   <router-link to="/user">여기로</router-link> like the <a href="/user"></a>
   ```

###  Scripts
##### .go( )
- ```js
  this.$router.go(-1)
  this.$router.go(3)
  ```

##### .push( )  
- ```js
  // path
  this.$router.push({
    path: 'user'
  })

  // name
  this.$router.push({
    name: 'EmployeeDetail',
    params: {
      employeeId: '1104899'
    }
  })

  // do this. /employee?employeeId=1104899
  this.$router.push({
    path: 'employee',
    params: {
      employeeId: '1104899'
    }
  })
  ```

##### .replace( )
- .push( ) 와 같다. 다만 히스토리에 안 쌓임.
