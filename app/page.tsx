'use client';

import './globals.css';
import * as React from 'react';
import classNames from 'classnames';

export default function App() {
  const [tab1CurrentIndex, setTab1CurrentIndex] = React.useState(0);

  return (
    <>
      <div className="site-wrap h-screen border-2 bg-[#cfcfcf]">
        <div className="site-main-border border-2 border-black m-[20px] h-[95%] rounded-[30px] bg-white flex items-center justify-center">
          <div className="site-sub-border border-2 border-dashed border-black m-[30px] h-[95%] rounded-[30px] w-full flex items-center justify-center">
            <div className="site-background m-[20px] h-[95%] rounded-[30px] bg-[#62b1da] w-full">
              <div className="mini-home-page-wrap flex h-full">
                <div className="home-page__left w-[25%] flex flex-col items-center">
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
                          <img
                            className="w-full h-full block object-contain"
                            src="http://wiki.hash.kr/images/thumb/1/1e/%E3%88%9C%EC%8B%B8%EC%9D%B4%EC%9B%94%EB%93%9C_%EB%A1%9C%EA%B3%A0.png/200px-%E3%88%9C%EC%8B%B8%EC%9D%B4%EC%9B%94%EB%93%9C_%EB%A1%9C%EA%B3%A0.png"
                            alt="싸이월드 로고"
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
                <div className="home-page__right flex-grow">
                  <div className="right-page__head"></div>
                  <div className="right-page__body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
