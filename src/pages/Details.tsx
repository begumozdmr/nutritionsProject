import { gql, useMutation } from '@apollo/client';
import PageHeader from 'components/PageHeader'
import React, { useState } from 'react';

const TOKEN__MUTATION = gql`
mutation Token($token: String) {
    token(token: $token) {
      id
      meetingTime {
        id
        day
        hour
        nutritionName
      }
      usersDetails {
        id
        day
        weight
        height
        result
      }
    }
  }
`;

interface UsersDetailsType {
    id: number;
    day: string;
    weight: number;
    height: number;
    result: string;
};

interface MeetingTimeType {
    id: number,
    day: string,
    hour: string,
    nutritionName: string
}

interface ProgressBarType {
    id: number,
    header: string,
    completed: string,
};

const ProgressBarData: ProgressBarType[] = [
    {
        id: 1,
        header: "Nutrition Strategies",
        completed: "55%"
    },
    {
        id: 2,
        header: "Weight Loss Program",
        completed: "75%"
    },
    {
        id: 3,
        header: "Motivation Nutrition",
        completed: "89%"
    },
];

export default function Details() {

    const [usersDetail, setUsersDetail] = useState<UsersDetailsType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = usersDetail.slice(firstIndex, lastIndex);
    const page = Math.ceil(usersDetail.length / recordsPerPage);
    const numbers = [...Array(page + 1).keys()].slice(1);

    const [meetingTime, setMeetingTime] = useState<MeetingTimeType[]>([]);

    const [TokenUsers] = useMutation(TOKEN__MUTATION, {
        variables: {
            token: localStorage.getItem("token")
        },
        onCompleted: ({ token }) => {
            if (token && token.usersDetails) {
                setUsersDetail(token.usersDetails);
                setMeetingTime(token.meetingTime);
            }
        }
    });

    React.useEffect(() => {
        TokenUsers();
    }, []);

    const PrevFunction = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const NextFunction = () => {
        if (currentPage !== page) {
            setCurrentPage(currentPage + 1)
        }
    };

    const ChnagePages = (id: number) => {
        setCurrentPage(id);
    };

    const CancelTableFunction = (id: number) => {
        setMeetingTime(meetingTime.filter((index) => index.id !== id));
    };

    return (
        <>
            <PageHeader page='Details' />

            <section className='container__background container__background--about'>
                <div className='container'>
                    <div className='row'>
                        <div className='page__header__comment page__header__comment--content'>
                            <h4 className='content__header'>Your Body Mass Index Reports</h4>
                            <div className='table__container'>
                                <table id="users">
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Width</th>
                                            <th>Height</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            records.map((index: UsersDetailsType) => {
                                                return (
                                                    <tr key={index.id}>
                                                        <td>{index.day}</td>
                                                        <td>{index.height}</td>
                                                        <td>{index.weight}</td>
                                                        <td>{index.result}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className='table__pagination'>
                                <button onClick={PrevFunction} className='pagination'>Prev</button>
                                {
                                    numbers.map((number, i: number) => {
                                        return (
                                            <button key={i} onClick={() => ChnagePages(number)} className={`pagination__item ${currentPage === number ? "active" : ""}`}>{number}</button>
                                        )
                                    })
                                }
                                <button onClick={NextFunction} className='pagination'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='container'>
                <div className='row'>
                    <div className='page__header__comment page__header__comment--content'>
                        <div className='grid-2 grid-2__gap'>
                            <img src={require("../img/details__page__img.png")} alt='woman-1' className='details__page__img'></img>
                            <div className='page__header__comment page__header__comment--content'>
                                <h4 className='content__header'>We Give You Inspiration For A Healthy Life</h4>
                                <h5 className='content__header content__header--comment'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                                </h5>

                                <div className='progressbar__container'>
                                    {
                                        ProgressBarData.map((index: { id: number, header: string, completed: string }) => {
                                            return (
                                                <div key={index.id}>
                                                    <div className='progressbar__header'>
                                                        <span>{index.header}</span>
                                                        <span>{index.completed}</span>
                                                    </div>
                                                    <div className='progress__bar'>
                                                        <div className='progress__bar--green' style={{ width: `${index.completed}` }} ></div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='container__background container__background--about'>
                <div className='container'>
                    <div className='row'>
                        <div className='page__header__comment page__header__comment--content'>
                            <h4 className='content__header'>Meeting Time</h4>

                            <div className='table__container'>
                                <table id="meeting">
                                    <thead>
                                        <tr>
                                            <th>Nutritionist Name</th>
                                            <th>Day</th>
                                            <th>Hour</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            meetingTime.map((index: MeetingTimeType) => {
                                                return (
                                                    <tr key={index.id}>
                                                        <td>{index.nutritionName}</td>
                                                        <td>{index.day}</td>
                                                        <td>{index.hour}</td>

                                                        <td>
                                                            <button className="cancel__button" onClick={() => CancelTableFunction(index.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
