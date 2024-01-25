'use client';

import './globals.css';
import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import profileImg from '../public/images/cyworld.png';

export default function App() {
  const [tab1CurrentIndex, setTab1CurrentIndex] = React.useState(0);
  const [tab2CurrentIndex, setTab2CurrentIndex] = React.useState(0);

  const TapContentBoxMenuStyle = ({ children }: any) => {
    return (
      <a className="bg-white p-3 block border-2 border-black border-l-transparent rounded-[0_10px_10px_0] cursor-pointer">
        {children}
      </a>
    );
  };

  return (
    <>
      <div className="site-wrap h-screen border-2 bg-[#cfcfcf]">
        <div className="site-main-border border-2 border-black m-[20px] h-[95%] rounded-[30px] bg-white flex items-center justify-center">
          <div className="site-sub-border border-2 border-dashed border-black m-[30px] h-[95%] rounded-[30px] w-full flex items-center justify-center">
            <div className="site-background m-[20px] h-[95%] rounded-[30px] bg-[#62b1da] w-full">
              <div className="mini-home-page-wrap flex h-full">
                <div className="home-page__left flex flex-col items-center mx-[30px] flex-shirink-0">
                  <div className="left-page__head">
                    <div className="rounded-[10px] h-[50px] bg-white border-2 border-black w-[300px] flex items-center justify-center mt-[20px]">
                      <span className="text-[1.7rem] pt-[5px]">OOO님의 미니홈피</span>
                    </div>
                    <div className="rounded-[10px] h-[30px] bg-white border-2 border-black w-[300px] flex items-center justify-center mt-[5px] flex gap-x-2 pt-[3px]">
                      <span className="flex gap-x-2 items-center">
                        <p className="text-[13px]">TODAY</p>
                        <p className="text-red-400">221</p>
                      </span>
                      <span>|</span>
                      <span className="flex gap-x-2 items-center">
                        <p className="text-[13px]">TOTAL</p>
                        <p className="text-blue-400">2024</p>
                      </span>
                    </div>
                  </div>
                  <div className="left-page__body flex-grow">
                    <div className="side-info border-2 border-black rounded-[15px] bg-[#dfdfdf] h-[95%] w-[350px] mt-[5px] flex items-center justify-center">
                      <div className="side-info__content-box border-2 border-black rounded-[15px] bg-white h-[96%] m-[10px] w-full flex flex-col items-center">
                        <div className="side-info__profile-img-box w-[270px] h-[230px] border-2 border-black mt-[20px]">
                          <Image
                            className="w-full h-full block object-contain"
                            src={profileImg}
                            alt="싸이월드로고"
                          />
                        </div>
                        <div className="side-info__intro-box w-[270px] h-[165px] border-y border-dotted border-black my-[15px]">
                          <div className="feel-today-box border-2 border-black w-full h-[35px] rounded-[5px] mt-[5px] flex items-center justify-center">
                            <span className="pt-[4px]">
                              TODAY IS... <span className="text-red-500">❤</span> 파이팅!
                            </span>
                          </div>
                          <div className="greetings-box">
                            <span className="text-[1.6rem] block flex items-center justify-center mt-[14px] leading-[1.3]">
                              ㅇㅇㅇ의 미니홈피에
                              <br />
                              오신 것을
                              <br />
                              환영합니다!
                            </span>
                          </div>
                        </div>
                        <div className="side-info__anniversary-box">
                          <span>2024.02.19 Birth Date 🥂</span>
                        </div>
                        <div className="side-info__tap-box w-[270px] mt-[7px]">
                          <div className="tap-box__head flex">
                            <div
                              onClick={() => setTab1CurrentIndex(0)}
                              className={classNames(
                                'border-black border-2 border-b-0 rounded-[8px_8px_0_0] w-[70px] text-center cursor-pointer',
                                {
                                  'bg-white border-b-[#fff] mb-[-1.35px]': tab1CurrentIndex === 0,
                                  'bg-[#dfdfdf]': tab1CurrentIndex !== 0,
                                },
                              )}>
                              <span>홈주인</span>
                            </div>
                            <div
                              onClick={() => setTab1CurrentIndex(1)}
                              className={classNames(
                                'border-black border-2 border-b-0 rounded-[8px_8px_0_0] w-[60px] text-center ml-[-3.5px] cursor-pointer',
                                {
                                  'bg-white border-b-[#fff] mb-[-1.35px]': tab1CurrentIndex === 1,
                                  'bg-[#dfdfdf]': tab1CurrentIndex !== 1,
                                },
                              )}>
                              <span>나</span>
                            </div>
                          </div>
                          <div className="tap-box__body bg-white border-2 border-black rounded-[0_5px_5px_5px]">
                            {tab1CurrentIndex == 0 && (
                              <div className="select-box-1 w-full p-[3px]">
                                <select
                                  name="serfing"
                                  className="w-full bg-[#dfdfdf] border-2 border-black rounded-[5px]">
                                  <option selected disabled>
                                    일촌 파도타기
                                  </option>
                                  <option>배수연</option>
                                  <option>라따</option>
                                  <option>뚜이</option>
                                </select>
                              </div>
                            )}
                            {tab1CurrentIndex == 1 && (
                              <div className="select-box-2 w-full p-[3px]">
                                <select
                                  name="serfing"
                                  className="w-full bg-[#dfdfdf] border-2 border-black rounded-[5px]">
                                  <option selected disabled>
                                    파도타기
                                  </option>
                                  <option>배수연</option>
                                  <option>라따</option>
                                  <option>뚜이</option>
                                </select>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-page__right flex-grow bg-green-300 flex flex-col">
                  <div className="right-page__head h-[105px]"></div>
                  <div className="right-page__body flex-grow">
                    <div className="border-2 border-black rounded-[15px] bg-white h-[95%] w-[90%] mt-[5px] flex items-center justify-center">
                      <div className="tap-content-box border-2 border-red-300 h-[90%] w-full flex flex-row-reverse mr-[-12%]">
                        <div className="tap-content-box__side-menu">
                          <ul className="flex flex-col gap-y-1">
                            <li>
                              <TapContentBoxMenuStyle onClick={() => setTab2CurrentIndex(0)}>
                                <span className="flex justify-center">홈</span>
                              </TapContentBoxMenuStyle>
                            </li>
                            <li>
                              <TapContentBoxMenuStyle onClick={() => setTab2CurrentIndex(1)}>
                                <span className="flex justify-center">프로필</span>
                              </TapContentBoxMenuStyle>
                            </li>
                            <li>
                              <TapContentBoxMenuStyle onClick={() => setTab2CurrentIndex(2)}>
                                <span className="flex justify-center">다이어리</span>
                              </TapContentBoxMenuStyle>
                            </li>
                            <li>
                              <TapContentBoxMenuStyle onClick={() => setTab2CurrentIndex(3)}>
                                <span className="flex justify-center">방명록</span>
                              </TapContentBoxMenuStyle>
                            </li>
                          </ul>
                        </div>
                        <div className="tap-content-box__main-content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
