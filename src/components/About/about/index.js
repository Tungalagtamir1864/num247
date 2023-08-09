import React from 'react';
import css from './style.module.css';


const about = () => {
  const icons = [
    { count: '350+', label: 'Багш, ажилтан' },
    { count: '1200+', label: 'Сурагч' },
    { count: '10+', label: 'Мэргэжил' },
    { count: '10+', label: 'Номын сан' },
  ];

  return (
    <div>
      <section className={css.about}>
        <div className={css.content}>
          <h3 className={css.about_title}>Мэдээлэл, Компьютерийн ухааны тэнхим</h3>
          <p>
          Мэдээлэл, компьютерийн ухааны тэнхим нь Нэгдсэн Үндэстний Их Сургуулийн Макао дахь Олон Улсын Програм Хангамжийн Технологийн хүрээлэн, ОХУ-ын Дубна дахь Цөмийн Шинжилгээний Нэгдсэн Институт, Москвагийн улсын их сургууль, Эрхүүгийн их сургууль, Германы Гумбольтдын их сургууль, Кемнитцийн их сургууль, Японы Токиогийн их сургууль, Ивате их сургууль, Францын Тулузын их сургууль зэрэг 10 гаруй их сургуулиудтай эрдэм шинжилгээний хурал семинар, сургалт зохион явуулах, багш нарын мэргэжлийг дээшлүүлэх, мэргэжлийн ном сэтгүүл солилцох зэргээр хамтран ажилладаг. Өдгөө тус сургуулийн 10 гаруй багш өндөр хөгжилтэй орнуудын их дээд сургуульд алгебр, магадлалын онол, геометр, тооцон бодох математик, програм хангамжийн чиглэлээр магистрантур, докторантурт суралцаж байна.
          </p>

          <div className={css.icons_container}>
            {icons.map((icon, index) => (
              <div className={css.icons} key={index}>
                <h3>{icon.count}</h3>
                <span>{icon.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
