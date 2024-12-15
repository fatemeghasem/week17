# لیست مخاطبین

 .این پروژه با کمک تیم بوتو استارت ایجاد شده و صرفا جهت یادگیری است

## پیش‌نیازها

قبل از شروع، اطمینان حاصل کنید که موارد زیر نصب شده‌اند:

- npm i react-router-dom
- npm i react-icons

## توضیحات

+ **وضعیت‌ها (States):**

    1. search: برای جستجوی مخاطب ها.

    1. contact: متغییری برای نگهداری اطلاعات مخاطب جدید.

    1. isVisible: برای نمایش یا عدم نمایش دکمه حذف.

    1. contacts: آرایه‌ای از مخاطب ها.

    1. showComponent: برای نمایش یا عدم نمایش فرم افزودن مخاطب

    1. selectedContacts: آرایه‌ای از شناسه‌های مخاطب های انتخاب شده.

    1. showModal: برای نمایش یا عدم نمایش مدال تأیید حذف.

+ توابع:

    1. addContact: برای افزودن یک مخاطب جدید به آرایه تماس‌ها.

    1. searchHandler: برای مدیریت ورودی جستجو.

    1. toggleContactSelection: برای انتخاب یا عدم انتخاب یک مخاطب

    1. deleteSelectedContacts: برای حذف مخاطبین انتخاب شده.

+ ساختار JSX:

   1. ورودی جستجو و دکمه‌های حذف و افزودن مخاطب.

   1. نمایش فرم افزودن مخایب در صورت فعال بودن showComponent.

   1. لیست مخاطب ها با استفاده از کامپوننت ContactsList.

   1. دکمه تأیید حذف که تنها در صورت انتخاب مخاطب ها نمایان می‌شود.

   1. نمایش مدال تأیید حذف در صورت فعال بودن showModal.

+ نکات قابل توجه:

+ کامپوننت‌های AddContacts, ContactsList, و Modal به طور جداگانه پیاده‌سازی شده اند تا کد تمیز تری داشته باشیم.
   1. ContactsList  برای نمایش مخاطبین ادد شده  
   1. AddContacts  برای اضافه کردن مخاطبین
   1. Modal برای تایید حذف یا کنسل کردن حذف 

+ از CSS ماژول‌ها (مانند styles.container و styles.btn) برای استایل‌دهی استفاده کرده ایم.
