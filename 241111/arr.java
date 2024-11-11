// 자바, 파이썬, c와 같은 전통적인 프로그래밍 언어에서는 반복문을 사용할 수 있는 배열을 선언할 때, 선언단계부터 몇 개의 데이터를 처리할지 사전 정의

// int arr[5] = [1, 2, 3, 4, 5, 6, 7]
// int arr[20] = [1, 2, 3]
// 1) 컴퓨터가 조금 느려지는 것을 감안
// 2) 시간이 경과 => 총 max로 20개까지 데이터가 참
// 3) 40개까진 들어와야 하는 상황 발생 => 그러면 또 20개에서 20개가 더 차길 기다려야 함 => 비효율적!

// 해결방법 : 배열은 참조타입의 자료
// heap : 메모리공간을 사용 (참조타입)
// 배열 안에 있는 첫번째 인덱스값만 알고 있어도 두번째, 세번째 인덱스 값은 알아서 해당 주소를 통해서 찾아오는 특징이 있음!
// 장점
// 1. 읽어오는데 굉장히 효율적인 자료구조임! (참조타입을 갖고있다면 첫번째 값만 찾아오면 되니까!)
// 2. 이미 자료구조의 형식, 사이즈를 가지고 태어나기 때문에 해당 배열의 첫번째 혹은 마지막 번째에 순차적으로 값을 추가하는데 효율적임!
// 단점
// 1. 최초에 배열 데이터를 생성하는 시점에서 배열 안에 입력되어야 하는 데이터의 총 개수가 미정인 경우에 비효율적!
// 2. 값이 추가되었을 때, 해당 값이 개발자가 원하는 정확한 위치에 값을 추가하거나 혹은 삭제해야하는 경우에 비효율적! (불가능하진 않음 그러나 번잡스러움)


// 자료구조를 이야기할 때에는 배열 & 연결리스트
// 연결리스트 자료구조 : 산발적으로 흩어져있는 데이터를 필요에 따라서 하나의 연결된 리스트의 자료구조로 만들어주는 장점

// 연결리스트의 경우 : 값을 찾아서 불러오는데까지 배열 대비 상대적으로 시간이 오래 걸림

// 만약, 여러분들이 어떤 프로젝트 & 제품을 만드는데 있어서 데이터의 입출력 및 편집이 빈번하게 일어나야하는 상황 → 연결리스트 훨씬 효율적인 자료구조

// 만약, 컴포넌트가 마운트가 되는 시점에 server로 부터 전달받은 자료의 수정, 편집이 거의 일어나지 않는 정적인 형태의 프로젝트 및 제품이라면 배열

// 연결리스트 역시 사용할 수 있는 다양한 함수 혹은 속성 구현
// 1. 연결리스트를 활용해서 UI로 모든 데이터를 출력하는 추상자료형
// printAll()
// 2. 연결리스트를 활용해서 UI에 출력중인 모든 데이터를 제거하는 추상자료형
// clear()
// 3. 연결리스트를 활용해서 특정 인덱스값을 삽입하는 추상자료형
// insertAt(index, data)
// 4. 연결리스트를 활용해서 특정 인덱스값을 제거하는 추상자료형
// deleteAt(index)
// 5. 연결리스트 활용해서 마지막 인덱스값을 제거하는 추상자료형
// deleteLast()
// 6.  연결리스트를 활용해서 마지막 인덱스값을 추가하는 추상자료형
// insertLast()
// 7. 연결리스트를 활용해서 특정 인덱스값을 읽어오는 추상자료형
// getNode()