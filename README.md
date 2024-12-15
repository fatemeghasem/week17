# لیست مخاطبین

 این پروژه با کمک تیم *__بوتو استارت__* ایجاد شده و صرفا جهت یادگیری است

## پیش‌نیازها

قبل از شروع، اطمینان حاصل کنید که موارد زیر نصب شده‌اند:

- npm i react-router-dom
- npm i react-icons

# توضیحات

1. **وضعیت‌ها (States)**

    + search: برای جستجوی مخاطب ها.

    + contact: متغییری برای نگهداری اطلاعات مخاطب جدید.

    + isVisible: برای نمایش یا عدم نمایش دکمه حذف.

    + contacts: آرایه‌ای از مخاطب ها.

    + showComponent: برای نمایش یا عدم نمایش فرم افزودن مخاطب

    + selectedContacts: آرایه‌ای از شناسه‌های مخاطب های انتخاب شده.

    + showModal: برای نمایش یا عدم نمایش مدال تأیید حذف.

1. **توابع**

    + addContact: برای افزودن یک مخاطب جدید به آرایه تماس‌ها.

    + searchHandler: برای مدیریت ورودی جستجو.

    + toggleContactSelection: برای انتخاب یا عدم انتخاب یک مخاطب

    + deleteSelectedContacts: برای حذف مخاطبین انتخاب شده.

1. **ساختار JSX**

   + ورودی جستجو و دکمه‌های حذف و افزودن مخاطب.

   + نمایش فرم افزودن مخایب در صورت فعال بودن showComponent.

   + لیست مخاطب ها با استفاده از کامپوننت ContactsList.

   + دکمه تأیید حذف که تنها در صورت انتخاب مخاطب ها نمایان می‌شود.

   + نمایش مدال تأیید حذف در صورت فعال بودن showModal.

1. **نکات قابل توجه**

1. کامپوننت‌های AddContacts, ContactsList, و Modal به طور جداگانه پیاده‌سازی شده اند تا کد تمیز تری داشته باشیم.
   + ContactsList  برای نمایش مخاطبین ادد شده  
   + AddContacts  برای اضافه کردن مخاطبین
   + Modal برای تایید حذف یا کنسل کردن حذف 

1. از CSS ماژول‌ها (مانند styles.container و styles.btn) برای استایل‌دهی استفاده کرده ایم.
 

+ امیدواریم از کار من راضی باشید
  - [x]  @octocat:+1:This PR looks greate - بله راضی هستیم    
  - [ ] خیر ناامیدمان کردید    @octocat:shipit 

  ```
  فاطمه قاسمی 
  
  ```
