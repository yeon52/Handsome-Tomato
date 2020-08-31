Kakao.init("0b24d43fac19bb4524f58083eb6b5439");
// Kakao.Link.createDefaultButton(settings);
Kakao.Link.createDefaultButton({
  container: "#kakao-link-btn",
  objectType: "feed",
  content: {
    title: "ForestSnap",
    description: "궁금한 꽃, 버섯, 열매, 풀 사진을 찍어 찾아보세요",
    imageUrl:
      "http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      androidExecParams: "test",
    },
  },
  buttons: [
    {
      title: "웹으로 이동",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
      },
    },
  ],
});

