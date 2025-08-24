<!-- BANNER -->
<p align="center">
  <img src="./public/douauth.jpg" alt="douauth Banner" width="200px" />
</p>

<h1 align="center">✅ DouAuth</h1>
<p align="center">
  <b>Next.js와 Prisma DB를 이용한 카카오, 네이버 SNS로그인 구현 프로젝트</b>
</p>

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma%20DB-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>

</p>

---

## 🌈 주요 기능
- 📝 **카카오 & 네이버 로그인** 실시간으로 Prisma 웹 DB에 저장  

---

## 🛠 기술 스택
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma%20DB-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
</p>

---

## 📦 설치 및 실행
```bash
# 1) 레포지토리 복제
git clone https://github.com/choidy180/kakao-naver-next-auth
cd kakao-naver-next-auth

# 2) 의존성 설치
npm install

# 3) 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:3000 & http://127.0.0.1:3000 접
```

## 📡 Example Code (Theme Navigation)
```bash

import styled from "styled-components";
import { BsSun, BsMoon } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isThemeAtom } from '../recoil/theme'
import { BsPalette } from 'react-icons/bs'
import { useState } from "react";


const ThemeNavigation = ({changeTheme}:any) => {
    const useSetTheme = useSetRecoilState(isThemeAtom);
    const themeState= useRecoilState(isThemeAtom);
    const [view, setView] = useState(false);
    const useColorSet = (value:string) => {
        useSetTheme(value);
        setView(false);
        return;
    }
    return (
        <Container className={view ? '' : 'none'}>
            <Title>테마 설정</Title>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> setView(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cancel">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <LightDarkTheme color={themeState[0]}>
                <div onClick={()=>changeTheme(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sun">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </div>
                <div onClick={()=>changeTheme(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="moon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </div>
            </LightDarkTheme>
            <PointTheme>
                <h2 onClick={()=>console.log(themeState[0])}>Color Ficker</h2>
                <div className="container">
                    <ColorContent onClick={()=>useColorSet('#f53b57')} color={'#f53b57'}/>
                    <ColorContent onClick={()=>useColorSet('#3c40c6')} color={'#3c40c6'}/>
                    <ColorContent onClick={()=>useColorSet('#0be881')} color={'#0be881'}/>
                </div>
            </PointTheme>
            <ButtonBox color={themeState[0]} className={view ? 'none' : ''} onClick={()=> setView((e) => !e)}>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                </svg>
                </button>
            </ButtonBox>
        </Container>
    )
}

const Container = styled.div`
    width: 280px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    box-shadow: ${props => props.theme.shadowColor} 0px 2px 5px -1px, ${props => props.theme.shadowColor} 0px 1px 3px -1px;
    color: ${props => props.theme.textColor};
    transition: all .15s ease-in-out;
    padding: 14px;
    .cancel{
        position: absolute;
        top: 12px;
        right: 12px;
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
    &.none{
        right: -286px;
    }
`
const Title = styled.p`
    width: 100%;
    font-size: 19px;
    pointer-events: none;
    font-family: 'Pretendard-Regular';
    font-weight: 700;
`
const LightDarkTheme = styled.div`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 64px;
        border-radius: 8px;
        box-shadow: ${props => props.color} 0px 0px 0px 2px;
        cursor: pointer;
        transition: all .15s ease-in-out;
        svg {
            width: 28px;
            height: 28px;
        }
        .sun {
            width: 32px;
            height: 32px;
        }
    }
`
const PointTheme = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 24px;
    div.container {
        width: 255px;
        height: 85px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
        cursor: pointer;
    }
    h2{
        color: ${props => props.theme.textColor};
        font-size: 20px;
        font-weight: 500;
    }
`

const ColorContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
`

const ButtonBox = styled.div`
    width: 44px;
    height: 42px;
    position: absolute;
    left: -50px;
    top: 50%;
    transform: translateY(-50%);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    cursor: pointer;
    &.none{
        display: none;
    }
    &:hover{
        svg{
            color: ${props => props.color};
        }
    }
    button{
        &::after{
            content: '';
            position: absolute;
            width: 6px;
            height: 6px;
            top: -4px;
            right: -6px;
            border-radius: 50%;
            background-color: ${props => props.color};
        }
    }
    svg{
        left: -2px;
        width: 24px;
        height: 24px;
        color: ${props => props.theme.textColor};
        transition: all .15s ease-in-out;
        &:hover{
            color: ${props => props.color};
        }
    }
`
```
