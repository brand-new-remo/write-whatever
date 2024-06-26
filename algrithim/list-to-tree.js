// 用递归的方式实现list到tree的转换，tree的层次由给定的path决定，注意对父结点与子结点的处理！
var userList = [

  {name:'user1',age:18,province:'四川',city:'成都',district:'高新区'},

  {name:'user2',age:19,province:'四川',city:'成都',district:'天府新区'},

  {name:'user3',age:20,province:'四川',city:'南充',district:'顺庆区'},

  {name:'user4',age:22,province:'江苏',city:'南京',district:'鼓楼区'},

  {name:'user5',age:21,province:'江苏',city:'南京',district:'玄武区'},

  {name:'user6',age:21,province:'江苏',city:'镇江',district:'京口区'}

  ]

  function list2tree(list,path){

    const resultTreeArr = [];

    const helper = (level) => {
      const paths = path.split('\/');
      const levelPath = paths[level];
      if (!levelPath) return;
      const map = new Map();
      list.forEach(user => {
        const pathAttrValue = user[levelPath];
        if (map.has(pathAttrValue)) {
          const existUsers = map.get(pathAttrValue);
          existUsers.push(user);
          map.set(pathAttrValue, existUsers);
        } else {
          map.set(pathAttrValue, [user]);
        }
      });

      if (level > 0) {
        for (let i = 0; i < level; i++) {

        }
      } else {
        for (let [key, value] of map) {
          resultTreeArr.push({
            [levelPath]: key,
            children: value
          })
        }
      }


      helper(level + 1)
    }

    helper(0);

    return resultTreeArr;
  };

  var userTree = list2tree(userList, 'province/city/district');
