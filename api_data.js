define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/customer/login.php",
    "title": "01. Đăng nhập",
    "name": "01____ng_nh_p",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fbToken",
            "description": "<p>Token Facebook trả về khi Khách hàng xác thực qua số điện thoại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vDeviceToken",
            "description": "<p>Token trên device chạy iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firebaseToken",
            "description": "<p>Token trên device chạy Android</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GeneralDeviceType",
            "description": "<p>Hệ điều hành điện thoại mà tài xế sử dụng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eLoginType",
            "description": "<p>Kiểu đăng nhập của KH (không cần truyền)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GeneraAppVersion",
            "description": "<p>Phiên bản App hiện tại trên máy tài xế</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"fbToken\": EMAWegJHQDTjpkeadaRNI7AiBDvYrIJHci48CJ9ZB4qzNJqpqkUSyF0g34ZCoLqyVLOCkXzJ0Dwsz2MlwET3mxiGDTtsJZAOoa3htuQ7rZCQZDZD\n    \"vDevideToken\": tự lấy trên thiết bị\n    \"firebaseToken\": tự lấy trên thiết bị\n    \"GeneralDeviceType\": Android/iOS\\\n    \"eLoginType\": Customer (ex)\n    \"GeneralAppVersion\": 1.0.0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/get_detail.php",
    "title": "02. Lấy thông tin Khách hàng",
    "name": "02__L_y_th_ng_tin_Kh_ch_h_ng",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>data thông tin trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iUserId",
            "description": "<p>Mã Id Khách hàng (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vName",
            "description": "<p>Tên khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vEmail",
            "description": "<p>Email của khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vPhone",
            "description": "<p>Số điện thoại khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eGender",
            "description": "<p>Giới tính</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vAvgRating",
            "description": "<p>Điểm đánh giá (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iTripiD",
            "description": "<p>Mã Id chuyến đi đang trong hành trình (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripType",
            "description": "<p>Đơn vị khoảng cách (km / m)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vTripStatus",
            "description": "<p>Trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vTripPaymentMode",
            "description": "<p>Phương thức thanh toán cho chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iSelectedCarType",
            "description": "<p>Mã Id dịch vụ của chuyến đi hiện tại (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDestinationLatitude",
            "description": "<p>Vĩ độ điểm cuối của chuyến đi hiện tại (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDestinationLongitude",
            "description": "<p>Kinh độ điểm cuối của chuyến đi hiện tại (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDestinationAddress",
            "description": "<p>Địa chỉ điểm cuối của chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tRegistrationDate",
            "description": "<p>Thời gian khách hàng gửi yêu cầu tìm chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLatitude",
            "description": "<p>Vĩ độ điểm đầu (điểm đón khách)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLongitude",
            "description": "<p>Kinh độ điểm đầu (điểm đón khách)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iActive",
            "description": "<p>Trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fCommision",
            "description": "<p>Cước phí chuyến đi hiện tại (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trip_code",
            "description": "<p>Mã chữ chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_code",
            "description": "<p>Mã trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_name",
            "description": "<p>Tên trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vInviteCode",
            "description": "<p>Mã mời từ người dùng khác</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isVTPay",
            "description": "<p>true nếu đã liên kết ví, false nếu chưa liên kết ví</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"iUserId\": 5525779,\n           \"iRefUserId\": 0,\n           \"eRefType\": Driver,\n           \"vFbId\": 0,\n           \"vName\": an,\n           \"vLastName\": \"\",\n           \"vEmail\": ichizann@gmail.com,\n           \"vPassword\": \"\",\n           \"vCountry\": \"\",\n           \"vPhone\": 0982405200,\n           \"eGender\": Male,\n           \"vCreditCard\": \"\",\n           \"dBirthDate\": 0000-00-00,\n           \"vBankCode\": \"\",\n           \"vCardNumber\": \"\",\n           \"vCardHolderName\": \"\",\n           \"vExpMonth\": \"\",\n           \"vExpYear\": \"\",\n           \"vPaymentMethod\": \"\",\n           \"tTokenAlepay\": \"\",\n           \"vCvv\": \"\",\n           \"vImgName\": \"\",\n           \"vAvgRating\": 5,\n           \"vLogoutDev\": false,\n           \"iGcmRegId\": 626eb8fe23ae1f966074986fdf6a7437348c08b67cddca86d313c07ee2e47dab,\n           \"vCallFromDriver\": Not Assigned,\n           \"iTripId\": 4888,\n           \"tripType\": Km,\n           \"tripTypeSecond\": 0,\n           \"vTripStatus\": On Going Trip,\n           \"vTripPaymentMode\": Cash,\n           \"iSelectedCarType\": 159,\n           \"fPickUpPrice\": 0,\n           \"fNightPrice\": 1,\n           \"tDestinationLatitude\": 20.9866676,\n           \"tDestinationLongitude\": 105.7835446,\n           \"tDestinationAddress\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam,\n           \"vInviteCode\": 0976136739,\n           \"vCouponCode\": \"\",\n           \"vLang\": VN,\n           \"eStatus\": Active,\n           \"vPhoneCode\": 84,\n           \"vZip\": \"\",\n           \"vPassToken\": \"\",\n           \"eDeviceType\": Ios,\n           \"vCurrencyPassenger\": VND,\n           \"tRegistrationDate\": 2019-05-21 18:43:34,\n           \"iCabBookingId\": 0,\n           \"vStripeToken\": \"\",\n           \"vStripeCusId\": \"\",\n           \"eType\": \"Truck\",\n           \"iPackageTypeId\": \"0\",\n           \"vSenderName\": \"\",\n           \"vSenderMobile\": \"\",\n           \"vReceiverName\": \"\",\n           \"vReceiverMobile\": \"\",\n           \"tDetailFromAddr\": \"\",\n           \"tDetailToAddr\": \"\",\n           \"bTipDeliver\": 0,\n           \"fTipDeliver\": 0,\n           \"bTantayDeliver\": 0,\n           \"bKyDeliver\": 0,\n           \"fCodDeliver\": 0,\n           \"tPickUpIns\": \"\",\n           \"tDeliveryIns\": \"\",\n           \"tPackageDetails\": \"\",\n           \"eDeliverModule\": No,\n           \"iUserPetId\": 0,\n           \"iAppVersion\": 0,\n           \"vRefCode\": \"\",\n           \"dRefDate\": 0000-00-00 00:00:00,\n           \"vLatitude\": 21.0067366,\n           \"vLongitude\": 105.8461928,\n           \"tLastOnline\": 2019-05-02 11:05:07,\n           \"eEmailVerified\": No,\n           \"ePhoneVerified\": No,\n           \"iQty\": 1,\n           \"iUserVehicleId\": 0,\n           \"vPasswordToken\": \"\",\n           \"eSignUpType\": \"\",\n           \"tSessionId\": eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTgxMDc4NjAiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzMjkxODYwLCJ1c2VySWQiOiI1NTI1Nzc5In0.tCOIbCHusKz_ibbHgxGzYFh-Ubd_CgY0LNLGkA6NeAI,\n           \"vPassword_token\": \"\",\n           \"vRideCountry\": VN,\n           \"tDeviceSessionId\": e3rqu0s21e19jhi85n4ipohfj215567690717e5cedb,\n           \"iCompanyId\": null,\n           \"fPickNormalTime\": 1,\n           \"fFare\": 37000,\n           \"fMainWallet\": 0,\n           \"fPromotionWallet\": 0,\n           \"fAccumlatePoint\": 4059,\n           \"tAddress1\": 123 Nguyễn Lương Bằng, Nam Đồng, Đống Đa, Hà Nội, Việt Nam,\n           \"tAddress2\": 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Việt Nam,\n           \"tAddress3\": 169 Thịnh Quang, Đống Đa, Hà Nội,\n           \"tInforAddress1\": 21.0157933&105.8284058&Thành Phố Hà Nội&Viet Nam&2019-05-18 10:01:29,\n           \"tInforAddress2\": 21.0060224&105.8472161&Thành Phố Hà Nội&Viet Nam&2019-05-18 10:05:01,\n           \"tInforAddress3\": 20.9850982&105.7689142&Hà Nội&Viet Nam&2019-05-18 11:34:43,\n           \"tSourceAddress\": 20 Ngõ 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam,\n           \"distance\": 0,\n           \"duration\": 0,\n           \"vAppName\": \"\",\n           \"tTotalDriverids\": 1,\n           \"vRequestId\": 54867541557114729\n           \"tAddress4\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam,\n           \"tAddress5\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam,\n           \"tInforAddress4\": 20.9866676&105.7835446&Hà Nội&Viet Nam&2019-05-20 03:45:47,\n           \"tInforAddress5\": 21.0873555&105.8094916&Hà Nội&Viet Nam&2019-05-20 03:49:31,\n           \"vCallFrom\": \"\",\n           \"vCallTo\": \"\",\n           \"tFcmTokenId\": \"\",\n           \"iDurationRent\": 0,\n           \"tNoteDriver\": \"\",\n           \"iRequestId\": 75102,\n           \"fDiscount\": 0,\n           \"iTripIdGoBike\": 4852,\n           \"custId\": null,\n           \"vTokenFirebaseWeb\": null,\n           \"vRideNo\": \"85374595\",\n           \"isVTPay\": false,\n           \"iDriverId\": \"607954\",\n           \"tTripRequestDate\": \"2019-05-21 18:43:24\",\n           \"tDriverArrivedDate\": \"2019-05-21 18:24:40\",\n           \"tStartDate\": \"2019-05-21 18:43:24\",\n           \"tEndDate\": \"0000-00-00 00:00:00\",\n           \"iDriverVehicleId\": \"33153\",\n           \"tStartLat\": \"105.847\",\n           \"tStartLong\": \"21.0075\",\n           \"tEndLat\": \"21.0873555\",\n           \"tEndLong\": \"105.8094916\",\n           \"tSaddress\": \"Số, Ngõ 16 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam\",\n           \"tDaddress\": \"Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam\",\n           \"iFare\": \"250000\",\n           \"fPricePerKM\": \"200000\",\n           \"fPricePerKM_0\": \"14500\",\n           \"fPricePerKM_30\": \"4500\",\n           \"fPricePerKM_60\": \"4500\",\n           \"iBaseFare\": \"0\",\n           \"iBaseFare_30\": \"0\",\n           \"iBaseFare_NB_HN\": \"0\",\n           \"iBaseFare_HN_NB\": \"0\",\n           \"fPricePerMin\": \"1.5\",\n           \"fCommision\": \"37500\",\n           \"fDistance\": \"326\",\n           \"fDuration\": null,\n           \"iActive\": \"On Going Trip\",\n           \"iVerificationCode\": \"8980\",\n           \"eVerified\": \"Not Verified\",\n           \"eCarType\": \"CarX\",\n           \"iVehicleTypeId\": \"160\",\n           \"vCurrencyDriver\": \"VND\",\n           \"fRatioPassenger\": \"1\",\n           \"fRatioDriver\": \"1\",\n           \"ePayment_request\": \"No\",\n           \"vCancelReason\": \"\",\n           \"vCancelComment\": \"\",\n           \"eCancelled\": \"No\",\n           \"vDiscount\": \"\",\n           \"eDriverPaymentStatus\": \"Unsettelled\",\n           \"ePaymentCollect\": \"No\",\n           \"vDeliveryConfirmCode\": \"\",\n           \"fRatio_VND\": \"1.000000\",\n           \"fRatio_USD\": \"0.000000\",\n           \"eFareType\": \"Regular\",\n           \"fMinFareDiff\": \"0\",\n           \"fWalletDebit\": \"0\",\n           \"fSurgePriceDiff\": \"0\",\n           \"vBeforeImage\": \"\",\n           \"vAfterImage\": \"\",\n           \"fTripGenerateFare\": \"0\",\n           \"fGDtime\": \"\",\n           \"fGDdistance\": \"\",\n           \"fTipPrice\": \"0\",\n           \"fVisitFee\": \"0\",\n           \"fMaterialFee\": \"0\",\n           \"fMiscFee\": \"0\",\n           \"fDriverDiscount\": \"0\",\n           \"fCancellationFare\": \"0\",\n           \"eCancelChargeFailed\": No,\n           \"eCancelledBy\": Passenger,\n           \"vChannel\": \"\",\n           \"tDriverLat\": null,\n           \"tDriverLong\": null,\n           \"vSignatureImage\": \"\",\n           \"vReceiverImage\": \"\",\n           \"desOfGood\": \"\",\n           \"noteForDriver\": \"\",\n           \"noteOfGood\": \"\",\n           \"transfer_return_status\": \"0\",\n           \"trip_code\": GNTN721I,\n           \"last_progress_trip\": On Going Trip,\n           \"reason_transfer\": null,\n           \"last_progress_trip_code\": PROCESS_TRIP_02,\n           \"last_progress_trip_name\": Đã lấy hàng,\n           \"fareBaseDistance\": 200000,\n           \"additionalFareForPointDelivery\": 50000,\n           \"additionalFareForCOD\": 0\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/v1/customer/update_profile.php",
    "title": "03. Cập nhật thông tin khách hàng",
    "name": "03__C_p_nh_t_th_ng_tin_kh_ch_h_ng",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTgxMDc4NjAiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzMjkxODYwLCJ1c2VySWQiOiI1NTI1Nzc5In0.tCOIbCHusKz_ibbHgxGzYFh-Ubd_CgY0LNLGkA6NeAI\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Tên để update (Chỉ lần đầu tiên khi đăng kí)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ email để cập nhật</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteCode",
            "description": "<p>Mã giới thiệu từ người dùng khác</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{   \n    \"userName\": Mai An Tiêm\n    \"email\": noithathomehome@gmail.com\n    \"inviteCode\": 0976136739\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>trả về dữ liệu sau khi cập nhật</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iUserId",
            "description": "<p>Mã Id của khách hàng (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vEmail",
            "description": "<p>địa chỉ email mới sau khi cập nhật</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"iUserId\": 5525779,\n           \"iRefUserId\": 0,\n           \"eRefType\": Driver,\n           \"vFbId\": 0,\n           \"vName\": an,\n           \"vLastName\": \"\",\n           \"vEmail\": noithathomehome@gmail.com,\n           \"vPassword\": \"\",\n           \"vCountry\": \"\",\n           \"vPhone\": 0982405200,\n           \"eGender\": Male,\n           \"vCreditCard\": \"\",\n           \"dBirthDate\": \"0000-00-00\",\n           \"vBankCode\": \"\",\n           \"vCardNumber\": \"\",\n           \"vCardHolderName\": \"\",\n           \"vExpMonth\": \"\",\n           \"vExpYear\": \"\",\n           \"vPaymentMethod\": \"\",\n           \"tTokenAlepay\": \"\",\n           \"vCvv\": \"\",\n           \"vImgName\": \"\",\n           \"vAvgRating\": 5,\n           \"vLogoutDev\": false,\n           \"iGcmRegId\": 626eb8fe23ae1f966074986fdf6a7437348c08b67cddca86d313c07ee2e47dab,\n           \"vCallFromDriver\": Not Assigned,\n           \"iTripId\": 4888,\n           \"tripType\": Km,\n           \"tripTypeSecond\": 0,\n           \"vTripStatus\": On Going Trip,\n           \"vTripPaymentMode\": Cash,\n           \"iSelectedCarType\": 159,\n           \"fPickUpPrice\": 0,\n           \"fNightPrice\": 1,\n           \"tDestinationLatitude\": 20.9866676,\n           \"tDestinationLongitude\": 105.7835446,\n           \"tDestinationAddress\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam,\n           \"vInviteCode\": \"0976136739\",\n           \"vCouponCode\": \"\",\n           \"vLang\": \"VN\",\n           \"eStatus\": Active,\n           \"vPhoneCode\": 84,\n           \"vZip\": \"\",\n           \"vPassToken\": \"\",\n           \"eDeviceType\": Ios,\n           \"vCurrencyPassenger\": VND,\n           \"tRegistrationDate\": 2019-05-22 10:08:14,\n           \"iCabBookingId\": 0,\n           \"vStripeToken\": \"\",\n           \"vStripeCusId\": \"\",\n           \"eType\": \"Ride\",\n           \"iPackageTypeId\": 0,\n           \"vSenderName\": \"\",\n           \"vSenderMobile\": \"\",\n           \"vReceiverName\": \"\",\n           \"vReceiverMobile\": \"\",\n           \"tDetailFromAddr\": \"\",\n           \"tDetailToAddr\": \"\",\n           \"bTipDeliver\": 0,\n           \"fTipDeliver\": 0,\n           \"bTantayDeliver\": 0,\n           \"bKyDeliver\": 0,\n           \"fCodDeliver\": 0,\n           \"tPickUpIns\": \"\",\n           \"tDeliveryIns\": \"\",\n           \"tPackageDetails\": \"\",\n           \"eDeliverModule\": No,\n           \"iUserPetId\": 0,\n           \"iAppVersion\": 0,\n           \"vRefCode\": \"\",\n           \"dRefDate\": 0000-00-00 00:00:00,\n           \"vLatitude\": 21.0067366,\n           \"vLongitude\": 105.8461928,\n           \"tLastOnline\": 2019-05-02 11:05:07,\n           \"eEmailVerified\": \"No\",\n           \"ePhoneVerified\": \"No\",\n           \"iQty\": \"0\",\n           \"iUserVehicleId\": \"0\",\n           \"vPasswordToken\": \"\",\n           \"eSignUpType\": \"\",\n           \"tSessionId\": \"eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTgxMDc4NjAiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzMjkxODYwLCJ1c2VySWQiOiI1NTI1Nzc5In0.tCOIbCHusKz_ibbHgxGzYFh-Ubd_CgY0LNLGkA6NeAI\",\n           \"vPassword_token\": \"\",\n           \"vRideCountry\": VN,\n           \"tDeviceSessionId\": e3rqu0s21e19jhi85n4ipohfj215567690717e5cedb,\n           \"iCompanyId\": null,\n           \"fPickNormalTime\": \"1\",\n           \"fFare\": \"37000\",\n           \"fMainWallet\": \"0\",\n           \"fPromotionWallet\": \"0\",\n           \"fAccumlatePoint\": 4059,\n           \"tAddress1\": 123 Nguyễn Lương Bằng, Nam Đồng, Đống Đa, Hà Nội, Việt Nam,\n           \"tAddress2\": 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Việt Nam,\n           \"tAddress3\": 169 Thịnh Quang, Đống Đa, Hà Nội,\n           \"tInforAddress1\": 21.0157933&105.8284058&Thành Phố Hà Nội&Viet Nam&2019-05-18 10:01:29,\n           \"tInforAddress2\": 21.0060224&105.8472161&Thành Phố Hà Nội&Viet Nam&2019-05-18 10:05:01,\n           \"tInforAddress3\": 20.9850982&105.7689142&Hà Nội&Viet Nam&2019-05-18 11:34:43,\n           \"tSourceAddress\": 20 Ngõ 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam,\n           \"distance\": 0,\n           \"duration\": 0,\n           \"vAppName\": \"\",\n           \"tTotalDriverids\": 1,\n           \"vRequestId\": 54867541557114729,\n           \"tAddress4\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam,\n           \"tAddress5\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam,\n           \"tInforAddress4\": 20.9866676&105.7835446&Hà Nội&Viet Nam&2019-05-20 03:45:47,\n           \"tInforAddress5\": 21.0873555&105.8094916&Hà Nội&Viet Nam&2019-05-20 03:49:31,\n           \"vCallFrom\": \"\",\n           \"vCallTo\": \"\",\n           \"tFcmTokenId\": \"\",\n           \"iDurationRent\": \"0\",\n           \"tNoteDriver\": i am groot,\n           \"iRequestId\": 75102,\n           \"fDiscount\": 0,\n           \"iTripIdGoBike\": 4852,\n           \"custId\": null,\n           \"vTokenFirebaseWeb\": null\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/estimate_fare.php",
    "title": "04. Tính cước phí chuyến đi",
    "name": "04__T_nh_c__c_ph__chuy_n__i",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tripType",
            "description": "<p>Đơn vị đo khoảng cách (Km)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "distance",
            "description": "<p>Quãng đường di chuyển (m)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "SelectedCar",
            "description": "<p>Mã Id dịch vụ (bike/ship/truck)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "totalPointDelivery",
            "description": "<p>Số điểm giao hàng (min = 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cod",
            "description": "<p>Số tiền COD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "promotion_code",
            "description": "<p>Mã Khuyến Mãi (hiện tại chỉ có VT10 và VT10K)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shipType",
            "description": "<p>0 nếu ship 1-1; 1 nếu ship 1-N đồng giá</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "feePerReceiverPoint",
            "description": "<p>Cước phí trên mỗi điểm giao nếu lựa chọn dịch vụ đồng giá (trong khoảng 6000-20000)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"tripType\": Km\n    \"distance\": 6900\n    \"SelectedCar\": 152\n    \"totalPointDelivery\": 2\n    \"cod\": 1000000\n    \"promotion_code\": VT10K \n    \"shipType\": 1\n    \"feePerReceiverPoint\": 20000 \n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    https://vtmove-apiv2.ddns.net/api/v1/customer/estimate_fare.php?tripType=Km&distance=10000&SelectedCar=152&totalPointDelivery=2&cod=100000&promotion_code=VT10K \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Trả về thông tin giá cước</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_fare",
            "description": "<p>Tổng cước phí chuyến đi (sau khuyến mãi)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "FareOfCommitsion",
            "description": "<p>chiết khấu dựa trên tổng phí quãng đường + phí điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "TripDistance",
            "description": "<p>Tổng quãng đường (Km)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripType",
            "description": "<p>Km</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForCOD",
            "description": "<p>Cước phí thu hộ COD</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForPointDelivery",
            "description": "<p>Cước phí điểm giao cộng thêm (mỗi điểm giao thêm + 5.000đ)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareBaseDistance",
            "description": "<p>Cước phí thuần dựa trên quãng đường</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "discount_fare",
            "description": "<p>Giá trị của mã Khuyến Mại mà KH nhập</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driver_income",
            "description": "<p>Thu nhập lý thuyết của Tài xế (sau khi trừ chiết khấu)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "bonus_for_driver",
            "description": "<p>Tiền thưởng cho Tài xế (hiện = 15%)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "raw_fare",
            "description": "<p>Giá cước trước khi áp dụng mã Khuyến mãi (= total_fare + discount_fare)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example-ShipType=0:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"total_fare\": 16000,\n           \"FareOfCommision\": 3200,\n           \"TripDistance\": 3.1,\n           \"tripType\": \"Km\",\n           \"additionalFareForCOD\": 0,\n           \"additionalFareForPointDelivery\": 0,\n           \"fareBaseDistance\": 16000,\n           \"discount_fare\": 0,\n           \"driver_income\": 12800,\n           \"bonus_for_driver\": 2400,\n           \"raw_fare\": 16000\n       }\n}",
          "type": "json"
        },
        {
          "title": "Success-Example-ShipType=1:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"total_fare\": 60000,\n           \"FareOfCommision\": 12000,\n           \"TripDistance\": 1,\n           \"tripType\": \"Km\",\n           \"additionalFareForCOD\": 0,\n           \"additionalFareForPointDelivery\": 0,\n           \"fareBaseDistance\": 0,\n           \"discount_fare\": 0,\n           \"driver_income\": 48000,\n           \"bonus_for_driver\": 9000,\n           \"raw_fare\": 60000\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/load_available_driver.php",
    "title": "05. Tìm tài xế rảnh xung quanh",
    "name": "05__T_m_t_i_x__r_nh_xung_quanh",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryName",
            "description": "<p>Tên quốc gia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PickUpAddress",
            "description": "<p>Địa chỉ điểm đầu (điểm đón)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateName",
            "description": "<p>Tên tỉnh thành</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "PassengerLat",
            "description": "<p>Vĩ độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "PassengerLon",
            "description": "<p>Kinh độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iVehicleTypeId",
            "description": "<p>Mã dịch vụ (bike/ship/truck)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"countryName\": Việt Nam\n    \"PickUpAddress\": 35 Đại Cồ Việt, Hai Bà Trưng, Hà Nội\n    \"stateName\":    hanoi\n    \"PassengerLat\":  21.0067366\n    \"PassengerLon\":  105.8461928\n    \"iVehicleTypeId\": 152    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messenger",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu trả về danh sách các tài xế rảnh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLatitude",
            "description": "<p>Vĩ độ của Tài xế (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLongitude",
            "description": "<p>Kinh độ của Tài xế (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vName",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iDriverId",
            "description": "<p>Mã Id của Tài xế (đang sai kiểu)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": [\n           {\n               \"vLatitude\": \"21.006788495679054\",\n               \"vLongitude\": \"105.84624228052577\",\n               \"vName\": \"Mai Văn An\",\n               \"iDriverId\": \"607869\"\n           }\n       ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/v1/customer/send_request_driver_bike.php",
    "title": "06. Gửi yêu cầu dịch vụ Bike",
    "name": "06__G_i_y_u_c_u_d_ch_v__Bike",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryName",
            "description": "<p>Tên quốc gia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PickUpAddress",
            "description": "<p>Địa chỉ điểm đầu (đón khách)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driverIds",
            "description": "<p>Mã Id của tài xế sẽ nhận yêu cầu mới</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateName",
            "description": "<p>Tên tỉnh thành</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "DestLongitude",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "DestLatitude",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>timestamp + id User (sẽ lược bỏ ko cần truyền lên)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DestAddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PickUpLongitude",
            "description": "<p>Kinh độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PickUpLatitude",
            "description": "<p>Vĩ độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "distance",
            "description": "<p>Tổng quãng đường, tính bằng m</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noteForDriver",
            "description": "<p>Ghi chú cho tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "promotion_code",
            "description": "<p>Mã Khuyến Mãi (hiện tại chỉ có VT10 và VT10K)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "payType",
            "description": "<p>1 nếu thanh toán tiền mặt; 2 nếu thanh toán bằng ví</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{   \n    \"countryName\": Vietnam\n    \"PickUpAddress\": 20 ngõ 30 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội\n    \"driverIds\": 86,100,607869\n    \"stateName\": Hà Nội\n    \"DestLongitude\": 105.7835446\n    \"DestLatitude\": 20.9866676\n    \"requestId\": 54867541557114729\n    \"DestAddress\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam\n    \"PickUpLongitude\": 105.8461928\n    \"PickUpLatitude\": 21.0067366\n    \"distance\": 9152\n    \"noteForDriver\": i am groot\n    \"promotion_code\": VT10K\n    \"payType\": 1\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{   \n      https://vtmove-apiv2.ddns.net/api/v1/customer/send_request_driver_bike.php?countryName=Vietnam&PickUpAddress=20+Ng%C3%B5+30+T%E1%BA%A1+Quang+B%E1%BB%ADu%2C+B%C3%A1ch+Khoa%2C+Hai+B%C3%A0+Tr%C6%B0ng%2C+H%C3%A0+N%E1%BB%99i%2C+Vietnam&driverIds=86&stateName=Hà Nội&DestLongitude=105.7835446&DestLatitude=20.9866676&requestId=54867541557114729&DestAddress=66 LK6A, Hà Đông, Hà Nội, Việt Nam&PickUpLongitude=105.8461928&PickUpLatitude=21.0067366&distance=9152&noteForDriver=i am groot\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iRequestId",
            "description": "<p>Mã Id yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"Đang tìm tài xế\",\n       \"data\": {\n           \"iRequestId\": 75125\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/send_request_driver_ship.php",
    "title": "07. Gửi yêu cầu dịch vụ Ship/Truck",
    "name": "07__G_i_y_u_c_u_d_ch_v__Ship_Truck",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>timeStamp + userId (không cần sử dụng khi truyền lên, sẽ bỏ đi)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "distance",
            "description": "<p>Tổng quãng đường của chuyến đi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driverIds",
            "description": "<p>Danh sách các ID của Tài xế sẽ nhận yêu cầu đơn mới (đang sai kiểu)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateName",
            "description": "<p>Tên tỉnh thành</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryName",
            "description": "<p>Tên quốc gia</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "SelectedCarTypeID",
            "description": "<p>Mã dịch vụ (ship/truck)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PickUpAddress",
            "description": "<p>Địa chỉ đón</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PickUpLongitude",
            "description": "<p>Kinh độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PickUpLatitude",
            "description": "<p>Vĩ độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DestAddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "DestLongitude",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "DestLatitude",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "listReceivePoint",
            "description": "<p>Danh sách các điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiveAddress",
            "description": "<p>Địa chỉ điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "Stirng",
            "optional": false,
            "field": "receiveUserName",
            "description": "<p>Tên người nhận ở điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiveUserPhone",
            "description": "<p>Điện thoại người nhận ở điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú cho điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Vĩ độ điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Kinh độ điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "feeCod",
            "description": "<p>Tiền thu hộ COD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcelName",
            "description": "<p>Tên hàng hóa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcelPrice",
            "description": "<p>Giá trị hàng hóa (sẽ bỏ không sử dụng)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "promotion_code",
            "description": "<p>Mã Khuyến Mãi (hiện tại chỉ có VT10 và VT10K)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "payType",
            "description": "<p>1 nếu thanh toán tiền mặt; 2 nếu thanh toán bằng ví</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "shipType",
            "description": "<p>0 nếu ship 1-1; 1 nếu ship 1-N đồng giá</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "feePerReceiverPoint",
            "description": "<p>Cước phí trên mỗi điểm giao nếu lựa chọn dịch vụ đồng giá (trong khoảng 6000-20000)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "     {\n         \"requestId\": 55491961558095554,\n            \"distance\": 6900,\n            \"driverIds\": \"607759,607823,100,607954,607822\",\n            \"stateName\": Hà Nội,\n            \"countryName\": Vietnam,\n            \"selectedCarTypeID\": 161,\n            \"PickUpAddress\": Số, Ngõ 16 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam,\n            \"PickUpLongitude\": 21.007541,\n            \"PickUpLatitude\": 105.847476,\n            \"DestAddress\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam,\n            \"DestLatitude\": 21.0873555,\n            \"DestLongitude\": 105.8094916,\n            \"listReceivePoints\": [\n                {\n                    \"receiveAddress\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam,\n                    \"receiveUserName\": A Định,\n                    \"receiveUserPhone\": 0389595186,\n                    \"note\": \"\",\n                    \"latitude\": 21.0873555,\n                    \"longitude\": 105.8094916,\n                    \"feeCod\": 0,\n                    \"parcelName\": \"\",\n                    \"parcelPrice\": \"\"\n                }\n            ],\n            \"truckDetail\": {\n                \"weight\": 1000,\n                \"height\": 10,\n                \"width\": 10,\n                \"length\": 10,\n                \"truckDetailId\": 32132\n            },\n            \"promotion_code\":\"VT10\",\n            \"payType\": 1\n            \"shipType\": 1,\n\t        \"feePerReceiverPoint\": 20000\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iRequestId",
            "description": "<p>Mã Id yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"Đang tìm tài xế\",\n       \"data\": {\n           \"iRequestId\": 75125\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/cancel_cab_request.php",
    "title": "08. Hủy yêu cầu tìm chuyến (khi TX chưa nhận)",
    "name": "08__H_y_y_u_c_u_t_m_chuy_n__khi_TX_ch_a_nh_n_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cancel_reason",
            "description": "<p>Lý do hủy yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"cancel_reason\": Tôi chọn nhầm điểm đến !\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>null *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"Hủy yêu cầu thành công\",\n       \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/cancel_trip.php",
    "title": "09. Hủy chuyến đi (khi TX đã nhận đơn)",
    "name": "09__H_y_chuy_n__i__khi_TX____nh_n___n_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cancel_reason",
            "description": "<p>Lý do hủy chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"iTripId\": 3999\n    \"cancel_reason\": I cancel because i Like\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>null *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": mull,\n       \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/get_process_trip.php",
    "title": "10. Lấy trạng thái chuyến đi",
    "name": "10__L_y_tr_ng_th_i_chuy_n__i",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã Id chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"iTripId\": 3999\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>trả về trạng thái chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "tripStatus",
            "description": "<p>danh sách trạng thái đơn hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "progress_trip_id",
            "description": "<p>Mã id trạng thái đơn (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_date",
            "description": "<p>Thời điểm ghi nhận trạng thái</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_flag",
            "description": "<p>Chưa rõ (undefine)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Tên trạng thái</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "pointStatus",
            "description": "<p>danh sách trạng thái điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripPointsId",
            "description": "<p>Mã điểm giao (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rtdId",
            "description": "<p>Mã yêu cầu của chuyến đi (đơn hàng)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã Id của chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripPointOrder",
            "description": "<p>Thứ tự điểm giao trong chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiveAddress",
            "description": "<p>Địa chỉ điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiveUserName",
            "description": "<p>Tên người nhận tại điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiveUserPhone",
            "description": "<p>Sđt người nhận tại điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú của điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>Vĩ độ điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>Kinh độ điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Thời gian điểm giao được cập nhật trạng thái mới</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Mã trạng thái điểm giao (0,1,2,3)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feeCod",
            "description": "<p>Tiền thu hộ COD</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcelName",
            "description": "<p>Tên hàng hóa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcelPrice",
            "description": "<p>Giá trị hàng hóa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>Lý do nếu state = thất bại</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"tripStatus\": [\n               {\n                   \"progress_trip_id\": \"14394\",\n                   \"status\": \"COD01\",\n                   \"status_date\": \"2019-05-21 17:47:39\",\n                   \"status_flag\": \"1\",\n                   \"label\": \"Tìm tài xế\"\n               },\n               {\n                   \"progress_trip_id\": \"14410\",\n                   \"status\": \"COD02\",\n                   \"status_date\": \"2019-05-21 18:43:24\",\n                   \"status_flag\": \"1\",\n                   \"label\": \"Đã nhận hàng\"\n               },\n               {\n                   \"progress_trip_id\": \"3\",\n                   \"status\": \"COD03\",\n                   \"status_date\": null,\n                   \"status_flag\": \"0\",\n                   \"label\": \"Đã giao hàng\"\n               }\n           ],\n           \"pointStatus\": [\n               {\n                   \"tripPointsId\": \"1467\",\n                   \"rtdId\": \"75094\",\n                   \"iTripId\": \"4888\",\n                   \"tripPointOrder\": \"1\",\n                   \"receiveAddress\": \"Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam\",\n                   \"receiveUserName\": \"A Định\",\n                   \"receiveUserPhone\": \"0389595186\",\n                   \"note\": \"\",\n                   \"latitude\": \"21.0873555\",\n                   \"longitude\": \"105.8094916\",\n                   \"updateTime\": \"2019-05-21 18:43:24\",\n                   \"state\": \"3\",\n                   \"feeCod\": \"500000\",\n                   \"parcelName\": \"Văn phòng phẩm\",\n                   \"parcelPrice\": \"500000\",\n                   \"reason\": null\n               },\n               {\n                   \"tripPointsId\": \"1468\",\n                   \"rtdId\": \"75094\",\n                   \"iTripId\": \"4888\",\n                   \"tripPointOrder\": \"2\",\n                   \"receiveAddress\": \"123 Cầu Giấy, Quan Hoa, Hà Nội\",\n                   \"receiveUserName\": \"A Định\",\n                   \"receiveUserPhone\": \"0389595186\",\n                   \"note\": \"\",\n                   \"latitude\": \"21.0873555\",\n                   \"longitude\": \"105.8094916\",\n                   \"updateTime\": \"2019-05-21 18:43:24\",\n                   \"state\": \"3\",\n                   \"feeCod\": \"500000\",\n                   \"parcelName\": \"hàng hóa\",\n                   \"parcelPrice\": \"500000\",\n                   \"reason\": null\n               }\n           ]\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/get_order_detail.php",
    "title": "11. Lấy thông tin chi tiết chuyến đi",
    "name": "11__L_y_th_ng_tin_chi_ti_t_chuy_n__i",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã Id chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"iTripId\": 3999\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>trả về chi tiết chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tTripRequestDate",
            "description": "<p>thời gian yêu cầu chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_name",
            "description": "<p>Tên trạng thái cuối cùng của chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_code",
            "description": "<p>Mã trạng thái cuối cùng của chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iVehicleType",
            "description": "<p>Tên dịch vụ (truck/bike/ship)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trip_code",
            "description": "<p>Mã Chữ chuyến đi  (ví dụ: GNTX0BN2)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iFare",
            "description": "<p>Tổng cước phí</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vName",
            "description": "<p>Tên Tài xế thực hiện chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vPhone",
            "description": "<p>Số điện thoại của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fDistance",
            "description": "<p>Tổng quãng đường chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLicencePlate",
            "description": "<p>Biển số xe Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tStartLat",
            "description": "<p>Vĩ độ điểm đón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tStartLong",
            "description": "<p>Kinh độ điểm đón</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLat",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLong",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tSaddress",
            "description": "<p>Địa chỉ điểm đầu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDaddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForCOD",
            "description": "<p>Cước phí thu hộ COD</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForPointDelivery",
            "description": "<p>Cước phí điểm giao cộng thêm (mỗi điểm giao thêm + 5.000đ)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareBaseDistance",
            "description": "<p>Cước phí thuần dựa trên quãng đường</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"tTripRequestDate\": \"2019-05-15 13:56:01\",\n           \"last_progress_trip_name\": \"\",\n           \"last_progress_trip_code\": \"PROCESS_TRIP_05\",\n           \"iVehicleType\": \"Truck\",\n           \"trip_code\": \"GNTX0BN2\",\n           \"iFare\": \"300000\",\n           \"vName\": \"Mavel Captain An\",\n           \"vPhone\": \"0921906536\",\n           \"fDistance\": \"1234\",\n           \"vLicencePlate\": \"30E 66666\",\n           \"tStartLat\": \"\",\n           \"tStartLong\": \"\",\n           \"tEndLat\": \"20.986hihi676\",\n           \"tEndLong\": \"105.78haha6\",\n           \"tSaddress\": \"456 Thụy Khuê, Ba Đình, Hà Nội\",\n           \"tDaddress\": \"nguyễn văn lộc, hà đông\",\n           \"fareBaseDistance\": null,\n           \"additionalFareForPointDelivery\": null,\n           \"additionalFareForCOD\": null,\n           \"fCommision\": \"45000\",\n           \"iTripId\": \"3908\",\n           \"vAvgRating\": \"4.58\",\n           \"points\": [\n               {\n                   \"tripPointsId\": \"313\",\n                   \"rtdId\": \"72786\",\n                   \"iTripId\": \"3908\",\n                   \"tripPointOrder\": \"1\",\n                   \"receiveAddress\": \" 123 cầu giấy, quan hoa, hà nội\",\n                   \"receiveUserName\": \"Mai Văn An\",\n                   \"receiveUserPhone\": \"đây là số phone\",\n                   \"note\": \"note đi bây bi\",\n                   \"latitude\": \"test\",\n                   \"longitude\": \"một mình\",\n                   \"updateTime\": \"2019-05-14 17:19:13\",\n                   \"state\": \"3\",\n                   \"feeCod\": \"100000\",\n                   \"parcelName\": \"hàng hóa\",\n                   \"parcelPrice\": \"0\",\n                   \"reason\": null\n               },\n               {\n                   \"tripPointsId\": \"314\",\n                   \"rtdId\": \"72786\",\n                   \"iTripId\": \"3908\",\n                   \"tripPointOrder\": \"2\",\n                   \"receiveAddress\": \"123 lương thế vinh, thanh xuân, hà nội\",\n                   \"receiveUserName\": \"Long mai \",\n                   \"receiveUserPhone\": \"0952652133\",\n                   \"note\": \"ok baby\",\n                   \"latitude\": \"20.9900935\",\n                   \"longitude\": \"105.7947686\",\n                   \"updateTime\": \"2019-05-14 17:19:13\",\n                   \"state\": \"3\",\n                   \"feeCod\": \"170000\",\n                   \"parcelName\": \"18\",\n                   \"parcelPrice\": \"19\",\n                   \"reason\": null\n               },\n               {\n                   \"tripPointsId\": \"315\",\n                   \"rtdId\": \"72786\",\n                   \"iTripId\": \"3908\",\n                   \"tripPointOrder\": \"3\",\n                   \"receiveAddress\": \"123 lương thế vinh, thanh xuân, hà nội\",\n                   \"receiveUserName\": \"Long mai \",\n                   \"receiveUserPhone\": \"0952652133\",\n                   \"note\": \"ok baby\",\n                   \"latitude\": \"20.9900935\",\n                   \"longitude\": \"105.7947686\",\n                   \"updateTime\": \"2019-05-14 17:19:13\",\n                   \"state\": \"3\",\n                   \"feeCod\": \"170000\",\n                   \"parcelName\": \"18\",\n                   \"parcelPrice\": \"19\",\n                   \"reason\": null\n               }\n           ],\n           \"vRating1\": \"5\",\n           \"vMessage\": \"\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "api/v1/customer/get_truck_vehicle_list.php",
    "title": "12. Lấy danh sách chi tiết dịch vụ Truck",
    "name": "12__L_y_danh_s_ch_chi_ti_t_d_ch_v__Truck",
    "group": "Customer",
    "description": "<p>API không yêu cầu tham số truyền lên</p>",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    https://vtmove-apiv2.ddns.net/api/v1/customer/get_truck_vehicle_list.php\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "truckDetailId",
            "description": "<p>Mã dịch vụ chi tiết Truck</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "serviceEd",
            "description": "<p>Mã dịch vụ (bike/ship/truck)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "length",
            "description": "<p>dài</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>rộng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>cao</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>Trọng tải</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{   \n    \"status\": 200,\n       \"message\": null,\n       \"data\": [\n           {\n               \"truckDetailId\": \"1\",\n               \"serviceId\": \"160\",\n               \"length\": \"1800\",\n               \"width\": \"1200\",\n               \"height\": \"1200\",\n               \"weight\": \"500\"\n           },\n           {\n               \"truckDetailId\": \"2\",\n               \"serviceId\": \"160\",\n               \"length\": \"3120\",\n               \"width\": \"1620\",\n               \"height\": \"1670\",\n               \"weight\": \"830\"\n           },\n           {\n               \"truckDetailId\": \"3\",\n               \"serviceId\": \"160\",\n               \"length\": \"3220\",\n               \"width\": \"1650\",\n               \"height\": \"1690\",\n               \"weight\": \"900\"\n           },\n           {\n               \"truckDetailId\": \"4\",\n               \"serviceId\": \"161\",\n               \"length\": \"2300\",\n               \"width\": \"1400\",\n               \"height\": \"1450\",\n               \"weight\": \"1000\"\n           },\n       ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/rating_driver.php",
    "title": "13. Đánh giá tài xế",
    "name": "13____nh_gi__t_i_x_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rating",
            "description": "<p>Số sao đánh giá cho Tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Nội dung đánh giá Tài xế</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"rating\": 5\n    \"iTripId\": 3999\n    \"comment\": Tài xế thô lỗ\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/get_driver_location.php",
    "title": "14. Lấy vị trí hiện tại của Tài xế",
    "name": "14__L_y_v__tr__hi_n_t_i_c_a_T_i_x_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã Id chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"iTripId\": 3999\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLatitude",
            "description": "<p>Vĩ độ tài xế (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLongitude",
            "description": "<p>Kinh độ tài xế (đang sai kiểu)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": {\n           \"vLatitude\": \"26.152\",\n           \"vLongitude\": \"105.236\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/get_customer_history.php",
    "title": "15. Lấy thông tin lịch sử chuyến đi",
    "name": "15__L_y_th_ng_tin_l_ch_s__chuy_n__i",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Số thứ tự trang kết quả trả về</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vehicleTypeId",
            "description": "<p>Mã dịch vụ (bike/ship/truck)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mã trạng thái code đơn hàng (PROCESS_TRIP_01 ...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderCode",
            "description": "<p>Mã chữ đơn hàng (tìm kiếm chính xác đơn hàng)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": null,\n       \"data\": [\n           {\n               \"iTripId\": \"4887\",\n               \"vRideNo\": \"28714198\",\n               \"iUserId\": \"5525779\",\n               \"iDriverId\": \"607954\",\n               \"tripType\": \"Km\",\n               \"tripTypeSecond\": \"0\",\n               \"tTripRequestDate\": \"2019-05-21 17:43:43\",\n               \"tDriverArrivedDate\": \"0000-00-00 00:00:00\",\n               \"tStartDate\": \"2019-05-21 17:43:43\",\n               \"tEndDate\": \"0000-00-00 00:00:00\",\n               \"iDriverVehicleId\": \"33153\",\n               \"tStartLat\": \"105.847\",\n               \"tStartLong\": \"21.0075\",\n               \"tEndLat\": \"21.0873555\",\n               \"tEndLong\": \"105.8094916\",\n               \"tSaddress\": \"Số, Ngõ 16 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam\",\n               \"tDaddress\": \"Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam\",\n               \"iFare\": \"23000\",\n               \"fPricePerKM\": \"15000\",\n               \"fPricePerKM_0\": \"14500\",\n               \"fPricePerKM_30\": \"4500\",\n               \"fPricePerKM_60\": \"4500\",\n               \"iBaseFare\": \"0\",\n               \"iBaseFare_30\": \"0\",\n               \"iBaseFare_NB_HN\": \"0\",\n               \"iBaseFare_HN_NB\": \"0\",\n               \"fPricePerMin\": \"1.5\",\n               \"fCommision\": \"3450\",\n               \"fDistance\": \"326\",\n               \"fDuration\": null,\n               \"iActive\": \"Active\",\n               \"iVerificationCode\": \"4042\",\n               \"eVerified\": \"Not Verified\",\n               \"eCarType\": \"CarX\",\n               \"iVehicleTypeId\": \"152\",\n               \"fPickUpPrice\": \"0\",\n               \"fNightPrice\": \"1\",\n               \"vTripPaymentMode\": \"Cash\",\n               \"vCurrencyPassenger\": \"VND\",\n               \"vCurrencyDriver\": \"VND\",\n               \"fRatioPassenger\": \"1\",\n               \"fRatioDriver\": \"1\",\n               \"ePayment_request\": \"No\",\n               \"vCancelReason\": \"\",\n               \"vCancelComment\": \"\",\n               \"eCancelled\": \"No\",\n               \"vCouponCode\": \"\",\n               \"vDiscount\": \"\",\n               \"fDiscount\": \"0\",\n               \"eDriverPaymentStatus\": \"Unsettelled\",\n               \"ePaymentCollect\": \"No\",\n               \"eType\": \"Deliver\",\n               \"iPackageTypeId\": \"0\",\n               \"vSenderName\": \"\",\n               \"vSenderMobile\": \"\",\n               \"vReceiverName\": \"\",\n               \"vReceiverMobile\": \"\",\n               \"tDetailFromAddr\": \"\",\n               \"tDetailToAddr\": \"\",\n               \"bTipDeliver\": \"0\",\n               \"bTantayDeliver\": \"0\",\n               \"bKyDeliver\": \"0\",\n               \"fCodDeliver\": \"0\",\n               \"tPickUpIns\": \"\",\n               \"tDeliveryIns\": \"\",\n               \"tPackageDetails\": \"\",\n               \"iUserPetId\": \"0\",\n               \"vDeliveryConfirmCode\": \"\",\n               \"fRatio_VND\": \"1.000000\",\n               \"fRatio_USD\": \"0.000000\",\n               \"eFareType\": \"Regular\",\n               \"fMinFareDiff\": \"0\",\n               \"fWalletDebit\": \"0\",\n               \"fSurgePriceDiff\": \"0\",\n               \"vBeforeImage\": \"\",\n               \"vAfterImage\": \"\",\n               \"fTripGenerateFare\": \"0\",\n               \"fGDtime\": \"\",\n               \"fGDdistance\": \"\",\n               \"fTipPrice\": \"0\",\n               \"iQty\": \"1\",\n               \"fVisitFee\": \"0\",\n               \"fMaterialFee\": \"0\",\n               \"fMiscFee\": \"0\",\n               \"fDriverDiscount\": \"0\",\n               \"fCancellationFare\": \"0\",\n               \"eCancelChargeFailed\": \"No\",\n               \"eCancelledBy\": \"Passenger\",\n               \"vChannel\": \"\",\n               \"fPickNormalTime\": \"1\",\n               \"tDriverLat\": null,\n               \"tDriverLong\": null,\n               \"distance\": \"0\",\n               \"duration\": \"0\",\n               \"iDurationRent\": \"0\",\n               \"tNoteDriver\": \"\",\n               \"vSignatureImage\": \"\",\n               \"vReceiverImage\": \"\",\n               \"fTipDeliver\": \"0\",\n               \"desOfGood\": \"\",\n               \"noteForDriver\": \"\",\n               \"noteOfGood\": \"\",\n               \"transfer_return_status\": \"0\",\n               \"trip_code\": \"GNT5FRZF\",\n               \"last_progress_trip\": \"Active\",\n               \"reason_transfer\": null,\n               \"last_progress_trip_code\": \"PROCESS_TRIP_01\",\n               \"last_progress_trip_name\": \"Tìm tài xế\",\n               \"fareBaseDistance\": \"15000\",\n               \"additionalFareForPointDelivery\": \"5000\",\n               \"additionalFareForCOD\": \"3000\",\n               \"vName\": \"Mavel Captain An\",\n               \"vPhone\": \"0921906536\"\n           }\n       ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/get_customer_history.php",
    "title": "16. Lấy thông tin lịch sử chuyến đi (WEB version)",
    "name": "16__L_y_th_ng_tin_l_ch_s__chuy_n__i__WEB_version_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Số thứ tự trang kết quả trả về</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Số lượng kết quả trên 1 trang</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vehicleTypeId",
            "description": "<p>mã dịch vụ (bike/ship/truck)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>mã trạng thái code đơn hàng (PROCESS_TRIP_01 ...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderCode",
            "description": "<p>mã chữ đơn hàng (tìm kiếm chính xác đơn hàng)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalRecord",
            "description": "<p>Tổng số lượng bản ghi kết quả trả về</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": " {\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": {\n        \"totalRecord\": 265,\n        \"page\": 1,\n        \"pageSize\": 10,\n        \"data\": [\n            {\n                \"iTripId\": 8148,\n                \"fTripGenerateFare\": 0,\n                \"bonusDriver\": 5850,\n                \"fareOfCommision\": 7800,\n                \"additionalFareForCOD\": 0,\n                \"additionalFareForPointDelivery\": 0,\n                \"fareBaseDistance\": 39000,\n                \"discountFare\": 0,\n                \"rawFare\": 39000,\n                \"driverIncome\": 31200,\n                \"fTipPrice\": 0,\n                \"fPricePerKM\": 32000,\n                \"tripType\": \"Km\",\n                \"tripDistance\": 7.83,\n                \"tripStatus\": \"Canceled\",\n                \"fRatio_VND\": 1,\n                \"trip_code\": \"GNTJ4545QO3\",\n                \"type\": \"Ride\",\n                \"requestTime\": \"2019-07-06 19:02:15\",\n                \"vehicleTypeId\": 159,\n                \"startLat\": \"21.0066\",\n                \"startLong\": \"105.846\",\n                \"startAddress\": \"Ngõ 30 Phố Tạ Quang Bửu, P. Bách Khoa, Quận Hai Bà Trưng, Thành Phố Hà Nội, Vietnam\",\n                \"endLat\": \"20.951758932310636\",\n                \"endLong\": \"105.83163611590862\",\n                \"endAddress\": \"Xã Tam Hiệp, H. Thanh Trì, Thành Phố Hà Nội, Vietnam\",\n                \"last_progress_trip\": \"Canceled\",\n                \"last_progress_trip_code\": \"PROCESS_TRIP_06\",\n                \"last_progress_trip_name\": \"Đã hủy\",\n                \"payType\": \"Cash\",\n                \"vRatingU\": 0\n            },\n            {\n                \"iTripId\": 8144,\n                \"fTripGenerateFare\": 0,\n                \"bonusDriver\": 19650,\n                \"fareOfCommision\": 26200,\n                \"additionalFareForCOD\": 0,\n                \"additionalFareForPointDelivery\": 0,\n                \"fareBaseDistance\": 131000,\n                \"discountFare\": 0,\n                \"rawFare\": 131000,\n                \"driverIncome\": 104800,\n                \"fTipPrice\": 0,\n                \"fPricePerKM\": 109000,\n                \"tripType\": \"Km\",\n                \"tripDistance\": 12.57,\n                \"tripStatus\": \"Canceled\",\n                \"fRatio_VND\": 1,\n                \"trip_code\": \"GNT0J0598U5\",\n                \"type\": \"Car\",\n                \"requestTime\": \"2019-07-06 16:32:30\",\n                \"vehicleTypeId\": 156,\n                \"startLat\": \"21.0068\",\n                \"startLong\": \"105.846\",\n                \"startAddress\": \"Ngách 30/18 phố Tạ Quang Bửu, P. Bách Khoa, Quận Hai Bà Trưng, Thành Phố Hà Nội, Vietnam\",\n                \"endLat\": \"20.9060497330018\",\n                \"endLong\": \"105.83042945712805\",\n                \"endAddress\": \"Xã Đại Áng, H. Thanh Trì, Thành Phố Hà Nội, Vietnam\",\n                \"last_progress_trip\": \"Canceled\",\n                \"last_progress_trip_code\": \"PROCESS_TRIP_06\",\n                \"last_progress_trip_name\": \"Đã hủy\",\n                \"payType\": \"Cash\",\n                \"vRatingU\": 0\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/send_request_driver_car.php",
    "title": "17. Gửi yêu cầu dịch vụ Car",
    "name": "17__G_i_y_u_c_u_d_ch_v__Car",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryName",
            "description": "<p>Tên quốc gia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PickUpAddress",
            "description": "<p>Địa chỉ điểm đầu (đón khách)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driverIds",
            "description": "<p>Mã Id của tài xế sẽ nhận yêu cầu mới</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stateName",
            "description": "<p>Tên tỉnh thành</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "DestLongitude",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "DestLatitude",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>timestamp + id User (sẽ lược bỏ ko cần truyền lên)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DestAddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PickUpLongitude",
            "description": "<p>Kinh độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PickUpLatitude",
            "description": "<p>Vĩ độ điểm đón</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "distance",
            "description": "<p>Tổng quãng đường, tính bằng m</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noteForDriver",
            "description": "<p>Ghi chú cho tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "promotion_code",
            "description": "<p>Mã Khuyến Mãi (hiện tại chỉ có VT10 và VT10K)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "payType",
            "description": "<p>1 nếu thanh toán tiền mặt; 2 nếu thanh toán bằng ví</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{   \n    \"countryName\": Vietnam\n    \"PickUpAddress\": 20 ngõ 30 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội\n    \"driverIds\": 86,100,607869\n    \"stateName\": Hà Nội\n    \"DestLongitude\": 105.7835446\n    \"DestLatitude\": 20.9866676\n    \"requestId\": 54867541557114729\n    \"DestAddress\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam\n    \"PickUpLongitude\": 105.8461928\n    \"PickUpLatitude\": 21.0067366\n    \"distance\": 9152\n    \"noteForDriver\": i am groot\n    \"promotion_code\": VT10K\n    \"payType\": 1\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{   \n      https://vtmove-apiv2.ddns.net/api/v1/customer/send_request_driver_bike.php?countryName=Vietnam&PickUpAddress=20+Ng%C3%B5+30+T%E1%BA%A1+Quang+B%E1%BB%ADu%2C+B%C3%A1ch+Khoa%2C+Hai+B%C3%A0+Tr%C6%B0ng%2C+H%C3%A0+N%E1%BB%99i%2C+Vietnam&driverIds=86&stateName=Hà Nội&DestLongitude=105.7835446&DestLatitude=20.9866676&requestId=54867541557114729&DestAddress=66 LK6A, Hà Đông, Hà Nội, Việt Nam&PickUpLongitude=105.8461928&PickUpLatitude=21.0067366&distance=9152&noteForDriver=i am groot\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iRequestId",
            "description": "<p>Mã Id yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n     \"message\": \"Đang tìm tài xế\",\n     \"data\": {\n         \"iRequestId\": 75125\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/check_promotion.php",
    "title": "18. Check mã Khuyến mại hợp lệ",
    "name": "18__Check_m__Khuy_n_m_i_h_p_l_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "promotion_code",
            "description": "<p>Mã khuyến mại cần check</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iVehicleId",
            "description": "<p>Mã dịch vụ chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{   \n    \"promotion_code\": VT10K\n    \"iVehicleId\": 159\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{   \n      https://vtmove-apiv2.ddns.net//api/v1/customer/check_promotion.php?promotion_code=VT10K\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n     \"status\": 200,\n     \"message\": \"VALID_CODE\",\n     \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Failed-Example:",
          "content": "{\n     \"status\": 400,\n     \"message\": \"CODE_IS_INVALID\",\n     \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Failed-Example:",
          "content": "{\n     \"status\": 400,\n     \"message\": \"SERVICE_IS_NOT_SUPPORTED\",\n     \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Failed-Example:",
          "content": "{\n     \"status\": 400,\n     \"message\": \"CODE_IS_EMPTY\",\n     \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/v1/customer/request_viettel_pay.php",
    "title": "19. Request to Viettel Pay",
    "name": "19__Request_to_Viettel_Pay",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "daily_amount_limit",
            "description": "<p>hạn mức tối đa trên ngày</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "trans_amount_limit",
            "description": "<p>hạn mức tối đa trên 1 giao dịch</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"daily_amount_limit\": 500000\n     \"trans_amount_limit\": 100000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "merchant_msisdn",
            "description": "<p>Số điện thoại để liên kết VT Pay</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "merchant_code",
            "description": "<p>Mã đối tác (truyền lên mặc định là MYGO)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Mã giao dịch lưu bên phía đối tác(mỗi lần thực hiện là 1 mã mới)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Phiên bản của bên Viettel Pay, hiện tại mặc định là 2.0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Luôn luôn là 0 (viettel Pay ghi thế )</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "daily_amount_limit",
            "description": "<p>Hạn mức trên ngày (Phải lớn hơn hạn mức/lần giao dịch). Đây là hạn mức mặc định.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "trans_amount_limit",
            "description": "<p>hạn mức trên một lần giao dịch (Phải nhỏ hơn hạn mức/ngày giao dịch). Là đăng ký nên giá trị này là mặc định</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageSuccess",
            "description": "<p>Là url mà viettel sẽ redirect đến khi giao dịch thành công.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageError",
            "description": "<p>Là url mà viettel sẽ redirect đến khi giao dịch thất bại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageResult",
            "description": "<p>Là url mà viettel sẽ POST data kết quả đăng ký</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"merchant_msisdn\": \"0977212594\",\n           \"merchant_code\": \"MYGO\",\n           \"order_id\": \"MGCONNECT_YP0CUUI9PPU1IBWV\",\n           \"version\": \"2.0\",\n           \"Type\": \"0\",\n           \"daily_amount_limit\": 500000,\n           \"trans_amount_limit\": 100000,\n           \"pageSuccess\": \"https://vtmove-apiv2.ddns.net/api/v1/pageSuccessVTPay.php\",\n           \"pageError\": \"https://vtmove-apiv2.ddns.net/api/v1/pageErrorVTPay.php\",\n           \"pageResult\": \"https://vtmove-apiv2.ddns.net/api/v1/pageResultVtPay.php\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/getBalance.php",
    "title": "20. Truy vấn số dư ví",
    "name": "20__Truy_v_n_s__d__v_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       Hiện chưa có example!\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/getTransactionHistory.php",
    "title": "21. Lấy lịch sử giao dịch ví",
    "name": "21__L_y_l_ch_s__giao_d_ch_v_",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "defaultValue": "1;",
            "description": "<p>Kết quả trả về sẽ được chia thành số trang nếu truyền lên</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Số lượng kết quả ở mỗi trang</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "defaultValue": "0",
            "description": "<p>(tất cả); = 1 Credit; = 2 Debit;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"page\": 2\n    \"pageSize\": 10\n    \"type\": Credit\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    https://vtmove-apiv2.ddns.net/api/v1/customer/getTransactionHistory.php?page=1&pageSize=10&type=0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalRecord",
            "description": "<p>tổng số bản ghi lịch sử ví</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalPage",
            "description": "<p>Tổng số Trang kết quả lịch sử ví</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Trang kết quả hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Số lượng bản ghi trên 1 trang</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{   \n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"totalRecord\": 0,\n           \"totalPage\": 0,\n           \"page\": 1,\n           \"pageSize\": 10,\n           \"data\": null\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/getCurrentStateOrder.php",
    "title": "22. Lấy trạng thái chuyến đi hiện tại của KH",
    "name": "22__L_y_tr_ng_th_i_chuy_n__i_hi_n_t_i_c_a_KH",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token xác thực</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Không cần truyền lên:",
          "content": "{\n    Không cần truyền lên.\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin trạng thái hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip",
            "description": "<p>Trạng thái chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_code",
            "description": "<p>Mã trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_name",
            "description": "<p>Tên trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Trạng thái</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"tripId\": \"8129\",\n           \"last_progress_trip\": \"Active\",\n           \"last_progress_trip_code\": \"PROCESS_TRIP_01\",\n           \"last_progress_trip_name\": \"Tài xế đang đến\",\n           \"state\": \"Active\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/getCurrentStateOrder.php",
    "title": "22. Lấy trạng thái chuyến đi hiện tại của KH",
    "name": "22__L_y_tr_ng_th_i_chuy_n__i_hi_n_t_i_c_a_KH",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token xác thực</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Không cần truyền lên:",
          "content": "{\n    Không cần truyền lên.\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin trạng thái hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip",
            "description": "<p>Trạng thái chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_code",
            "description": "<p>Mã trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_progress_trip_name",
            "description": "<p>Tên trạng thái chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Trạng thái</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"tripId\": \"8129\",\n           \"last_progress_trip\": \"Active\",\n           \"last_progress_trip_code\": \"PROCESS_TRIP_01\",\n           \"last_progress_trip_name\": \"Tài xế đang đến\",\n           \"state\": \"Active\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/v1/customer/getOrderDetailByRequest.php",
    "title": "23. Lấy thông tin chuyến đi bằng iRequestId",
    "name": "23__L_y_th_ng_tin_chuy_n__i_b_ng_iRequestId",
    "group": "Customer",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token xác thực</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "requestId",
            "description": "<p>Mã Id yêu cầu chuyến đi.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Không cần truyền lên:",
          "content": "{\n    \"requestId\": 86517\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin trạng thái hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Mã Id khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã Id tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iFare",
            "description": "<p>Tổng cước chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripStatus",
            "description": "<p>Trạng thái chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"tripId\": \"8118\",\n           \"userId\": \"5569173\",\n           \"driverId\": \"608631\",\n           \"tripType\": \"Km\",\n           \"tTripRequestDate\": \"2019-07-06 11:34:56\",\n           \"tStartDate\": \"2019-07-06 11:34:26\",\n           \"tEndDate\": \"2019-07-06 11:34:56\",\n           \"tStartLat\": \"105.847\",\n           \"tStartLong\": \"21.0075\",\n           \"tEndLat\": \"21.0873555\",\n           \"tEndLong\": \"105.8094916\",\n           \"tSaddress\": \"Số, Ngõ 16 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam\",\n           \"tDaddress\": \"Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam\",\n           \"iFare\": \"60000\",\n           \"fPricePerKM\": \"0\",\n           \"bonusDriver\": \"9000\",\n           \"fareOfCommision\": \"0\",\n           \"discountFare\": \"0\",\n           \"rawFare\": \"60000\",\n           \"driverIncome\": \"48000\",\n           \"fTipPrice\": \"0\",\n           \"fareBaseDistance\": \"0\",\n           \"additionalFareForPointDelivery\": \"0\",\n           \"tripDistance\": \"3000\",\n           \"iVehicleTypeId\": \"152\",\n           \"payType\": \"Cash\",\n           \"eType\": \"Deliver\",\n           \"tripStatus\": \"Finished\",\n           \"last_progress_trip\": \"Finished\",\n           \"last_progress_trip_name\": \"Kết thúc đơn hàng\",\n           \"driverInfo\": {\n               \"driverId\": \"608631\",\n               \"name\": \"Đông\",\n               \"fullName\": \"Đông \",\n               \"iCompanyId\": \"80\",\n               \"phone\": \"0977212594\",\n               \"gender\": \"Male\",\n               \"deviceType\": \"Android\",\n               \"rating\": \"5\",\n               \"licencePlate\": \"29f111023\"\n           }\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/signIn.php",
    "title": "01. Đăng nhập bằng số điện thoại",
    "name": "01____ng_nh_p_b_ng_s___i_n_tho_i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fbToken",
            "description": "<p>Token Facebook trả về khi tài xế xác thực qua Số điện thoại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vDeviceToken",
            "description": "<p>Token trên device chạy iOS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firebaseToken",
            "description": "<p>Token trên device chạy Android</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GeneralDeviceType",
            "description": "<p>Hệ điều hành điện thoại mà tài xế sử dụng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GeneraAppVersion",
            "description": "<p>Phiên bản App hiện tại trên máy tài xế</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"fbToken\": EMAWegJHQDTjpkeadaRNI7AiBDvYrIJHci48CJ9ZB4qzNJqpqkUSyF0g34ZCoLqyVLOCkXzJ0Dwsz2MlwET3mxiGDTtsJZAOoa3htuQ7rZCQZDZD\n    \"vDevideToken\": tự lấy trên thiết bị\n    \"firebaseToken\": tự lấy trên thiết bị\n    \"GeneralDeviceType\": Android/iOS\n    \"GeneralAppVersion\": 1.0.0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDUzMDgiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg5MzA4LCJ1c2VySWQiOiI2MDc4MjMifQ.E-KqCDN21CQpzl1mYziWqJ3XC57uHAhFU2FV-aSsgk4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_register",
            "description": "<p>Token server trả về khi tài khoản chưa tồn tại !</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Login:",
          "content": "{\n  \"status\": \"200\",\n  \"message\": \"OK\",\n  \"data\": {\n     \"token\": \"eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDUzMDgiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg5MzA4LCJ1c2VySWQiOiI2MDc4MjMifQ.E-KqCDN21CQpzl1mYziWqJ3XC57uHAhFU2FV-aSsgk4\",\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-Register:",
          "content": "{\n  \"status\": \"401\",\n  \"message\": \"ACCOUNT_NOT_EXIST\",\n  \"data\": {\n     \"token_register\": \"eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDUzMDgiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg5MzA4LCJ1c2VySWQiOiI2MDc4MjMifQ.E-KqCDN21CQpzl1mYziWqJ3XC57uHAhFU2FV-aSsgk4\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": \"401\",\n  \"message\": \"Invalid token\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getDetail.php",
    "title": "02. Lấy thông tin Tài xế",
    "name": "02__L_y_th_ng_tin_T_i_x_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>&quot;Dữ liệu trả về&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Mã tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Họ tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>Họ tên đầy đủ tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Định danh tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email của tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "mainWallet",
            "description": "<p>Id ví của tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>Trạng thái tài khoản tài xế (active, block ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Available nếu tx đang sẵn sàng để nhận chuyến, Not Available nếu tx không muộn nhận chuyến</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Xếp hạng tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripStatus",
            "description": "<p>Trạng thái hành trình hiện tại của tài xế (đang trong cuốc hay không)</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "tripID",
            "description": "<p>Mã Id chuyến đi mà tài xế đang trong hành trình</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rank",
            "description": "<p>Xếp hạng tài khoản Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensePlateNo",
            "description": "<p>Biển số xe của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "carType",
            "description": "<p>Danh sách dịch vụ Tài xế được quyền chạy</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "acceptedRate",
            "description": "<p>Tỉ lệ chấp nhận chuyến</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "cancelRate",
            "description": "<p>Tỉ lệ hủy chuyến</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "tripDetails",
            "description": "<p>Chi tiết chuyến đi đang trong hành trình của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "isSocial",
            "description": "<p>1 nếu là TX xã hội,  0 nếu là TX nội bộ Viettel</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "isVTPay",
            "description": "<p>true nếu đã liên kết ví ViettelPay,  false nếu chưa liên kết ví ViettelPay</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": 200,\n        \"message\": \"OK\",\n        \"data\": {\n            \"id\": 607954,\n            \"firstName\": \"Mavel Captain An\",\n            \"lastName\": \"\",\n            \"fullName\": \"Mavel Captain An \",\n            \"type\": \"Driver\",\n            \"phone\": \"0921906536\",\n            \"email\": \"\",\n            \"address\": \"Hello đây là trường Address\",\n            \"gender\": \"Male\",\n            \"birthday\": \"0000-00-00\",\n            \"mainWallet\": 156050,\n            \"countryCode\": \"VN\",\n            \"currencyCode\": \"VND\",\n            \"lang\": \"VN\",\n            \"active\": \"active\",\n            \"rating\": \"4.475\",\n            \"state\": \"Not Available\",\n            \"avatar\": \"\",\n            \"registrationDate\": \"2019-05-05\",\n            \"tripStatus\": \"Active\",\n            \"tripId\": 4844,\n            \"rank\": \"Tài khoản đồng\",\n            \"compName\": \"VTP\",\n            \"compAddress\": \"TanTrieu Street\",\n            \"cmpStatus\": \"Active\",\n            \"compId\": 7,\n            \"licencePlateNo\": \"30E 66666\",\n            \"carType\": \"152,159,160,161,162,163,164,165,166,167,168,169\",\n            \"isSocial\": 1,\n            \"isVTPay\": true,\n            \"fiveStarRating\": 0,\n            \"acceptedRate\": 11.56,\n            \"cancelRate\": 0,\n            \"avgRating\": 0,\n            \"tripDetails\": {\n                \"tripId\": 4844,\n                \"tripCode\": \"GNT3LOJ4\",\n                \"startLatitude\": 21.0067,\n                \"startLongitude\": 105.846,\n                \"endLatitude\": 20.9866676,\n                \"endLongitude\": 105.7835446,\n                \"passengerId\": 5525779,\n                \"passengerName\": \"an \",\n                \"passengerPhone\": \"0982405200\",\n                \"type\": \"Ride\",\n                \"noteDriver\": \"i am groot\",\n                \"endAddress\": \"66 LK6A, Hà Đông, Hà Nội, Việt Nam\",\n                \"startAddress\": \"20 Ngõ 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam\",\n                \"cod\": 0,\n                \"totalFareNum\": 37000,\n                \"fareOfCommision\": 5550,\n                \"iBaseFare\": 0,\n                \"distance\": 9.152,\n                \"pricePerKm\": 37000,\n                \"carTypeId\": \"159\",\n                \"last_progress_trip\": \"Active\",\n                \"iActive\": \"Active\",\n                \"ratingUser\": 5,\n                \"fareBaseDistance\": 37000,\n                \"additionalFareForCOD\": 0,\n                \"additionalFareForPointDelivery\": 0,\n                \"SelectedTypeName\": \"VTP-GO-BIKE\",\n                \"vLogo\": \"1545994537_ic_car_HNI-GOBIKE.png\"\n            },\n            \"iTripTimeId\": \"\",\n            \"TotalSeconds\": 0,\n            \"TimeState\": \"Pause\",\n            \"Ratings_From_Driver\": \"No Entry\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/updateDriverProfileDetail.php",
    "title": "03. Cập nhật mã mời",
    "name": "03__C_p_nh_t_m__m_i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteCode",
            "description": "<p>Mã giới thiệu từ người dùng khác</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{   \n    \"inviteCode\": 0986268899\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n     \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/getCountries.php",
    "title": "04. Lấy tên quốc gia",
    "name": "04__L_y_t_n_qu_c_gia",
    "group": "Driver",
    "description": "<p>Không cần truyền lên bất cứ gì</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iCountryId",
            "description": "<p>Mã quốc gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vCountry",
            "description": "<p>Tên quốc gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vCountryCode",
            "description": "<p>Mã chữ quốc gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vPhoneCode",
            "description": "<p>Mã điện thoại quốc gia</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vTimeZone",
            "description": "<p>Khu vực múi giờ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eStatus",
            "description": "<p>Đang chưa rõ là gì?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": {\n        \"totalValues\": 1,\n        \"CountryList\": [\n            {\n                \"key\": \"V\",\n                \"TotalCount\": 1,\n                \"List\": [\n                    {\n                        \"iCountryId\": \"230\",\n                        \"vCountry\": \"Viet Nam\",\n                        \"vCountryCode\": \"VN\",\n                        \"vCountryCodeISO_3\": \"VNM\",\n                        \"vPhoneCode\": \"84\",\n                        \"vTimeZone\": \"Asia/Ho_Chi_Minh\",\n                        \"eStatus\": \"Active\"\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/updateDriverLocations.php",
    "title": "05. Cập nhật vị trí Tài xế",
    "name": "05__C_p_nh_t_v__tr__T_i_x_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Vĩ độ của tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Kinh độ của tài xế</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"latitude\": 26.123456\n    \"longitude\": 105.5461345\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/updateDriverStatus.php",
    "title": "06. Cập nhật trạng thái tài xế",
    "name": "06__C_p_nh_t_tr_ng_th_i_t_i_x_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Trạng thái sẵn sàng nhận đơn từ hệ thống của Tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Vĩ độ của tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Kinh độ của tài xế</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"Status\":   Available\n    \"latitude\": 26.123456\n    \"longitude\": 105.5461345\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n     \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getListComplain.php",
    "title": "07. Lấy danh sách khiếu nại",
    "name": "07__L_y_danh_s_ch_khi_u_n_i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Details các khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mã khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Mã người khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại user (Driver/ Customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên người khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Tiêu đề khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issue_date",
            "description": "<p>Thời điểm ghi nhận khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "finish_date",
            "description": "<p>Thời điểm khiếu nại kết thúc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trip_id",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>Số điện thoại của người gửi khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_complain",
            "description": "<p>Mã khiếu nại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unlockDriver",
            "description": "<p>Chưa rõ (undefine)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": [\n           {\n               \"id\": \"218\",\n               \"ownerId\": \"607954\",\n               \"type\": \"Driver\",\n               \"name\": \"\",\n               \"title\": \"\",\n               \"content\": \"hê lô đây là khiếu nại của khách muốn xiên mình\",\n               \"status\": \"1\",\n               \"issue_date\": \"2019-05-14 14:58:19\",\n               \"finish_date\": null,\n               \"trip_id\": \"1124\",\n               \"contact\": \"\",\n               \"type_complain\": \"3\",\n               \"unlockDriver\": \"1\"\n           },\n           {\n               \"id\": \"229\",\n               \"ownerId\": \"607954\",\n               \"type\": \"Driver\",\n               \"name\": \"Mavel Captain An\",\n               \"title\": \"\",\n               \"content\": \"Khách đòi giảm tiền cước phí\",\n               \"status\": \"1\",\n               \"issue_date\": \"2019-05-20 10:38:06\",\n               \"finish_date\": null,\n               \"trip_id\": \"3987\",\n               \"contact\": \"0921906536\",\n               \"type_complain\": \"2\",\n               \"unlockDriver\": \"0\"\n           }, \n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/createComplain.php",
    "title": "08. Tạo khiếu nại",
    "name": "08__T_o_khi_u_n_i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeComplain",
            "description": "<p>Loại khiếu nại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Tiêu đề khiếu nại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung khiếu nại</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n     \"typeComplain\": FEEDBACK_TRIP\n     \"title\": khách thiếu văn hóa\n     \"content\": khách xin tiền tài xế \n     \"tripId\": 4852\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getYearTotalEarnings.php",
    "title": "09. Thông kê thu nhập theo tháng",
    "name": "09__Th_ng_k__thu_nh_p_theo_th_ng",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>dữ liệu trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "TotalEarning",
            "description": "<p>Tổng tiền trong năm</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "TripCount",
            "description": "<p>Tổng số chuyến thực hiện trong năm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CurrentYear",
            "description": "<p>Năm hiện tại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "MaxEarning",
            "description": "<p>undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "YearMonthArr",
            "description": "<p>Mảng chứa dữ liệu theo tháng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CurrentMonth",
            "description": "<p>Tên tháng</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "TotalEarnings",
            "description": "<p>Tổng tiền trong tháng</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"TotalEarning\": 2079950,\n           \"TripCount\": 66,\n           \"CurrentYear\": \"2019\",\n           \"MaxEarning\": 1998350,\n           \"YearMonthArr\": [\n               {\n                   \"CurrentMonth\": \"Jan\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Feb\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Mar\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Apr\",\n                   \"TotalEarnings\": 1998350,\n                   \"TripCount\": 63\n               },\n               {\n                   \"CurrentMonth\": \"May\",\n                   \"TotalEarnings\": 81600,\n                   \"TripCount\": 3\n               },\n               {\n                   \"CurrentMonth\": \"Jun\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Jul\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Aug\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Sep\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Oct\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Nov\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               },\n               {\n                   \"CurrentMonth\": \"Dec\",\n                   \"TotalEarnings\": 0,\n                   \"TripCount\": 0\n               }\n           ],\n           \"YearArr\": [\n               \"2019\"\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/getStateData.php",
    "title": "10. Lấy danh sách tỉnh thành, quận huyện",
    "name": "10__L_y_danh_s_ch_t_nh_th_nh__qu_n_huy_n",
    "group": "Driver",
    "description": "<p>Không cần truyền lên bất cứ gì</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iStateId",
            "description": "<p>Mã tỉnh thành</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vStateName",
            "description": "<p>Tên tỉnh thành</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vState",
            "description": "<p>Mã chữ tỉnh thành</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vCountylist",
            "description": "<p>Danh sách các quận, huyện thuộc tỉnh</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iCountyId",
            "description": "<p>Mã quận huyện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vCountyName",
            "description": "<p>Tên quận huyện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vCounty",
            "description": "<p>Mã chữ quận huyện</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n {\n\"status\": 200,\n\"message\": \"OK\",\n\"data\": [\n    {\n        \"iStateId\": 1,\n        \"vStateName\": \"Hà Nội\",\n        \"vState\": \"HNI\",\n        \"vCountylist\": [\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 1,\n                \"vCountyName\": \"QUẬN HOÀN KIẾM\",\n                \"vCounty\": \"HNHK\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 2,\n                \"vCountyName\": \"HUYỆN BA VÌ\",\n                \"vCounty\": \"HNBV\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 3,\n                \"vCountyName\": \"HUYỆN HOÀI ĐỨC\",\n                \"vCounty\": \"HNHC\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 4,\n                \"vCountyName\": \"QUẬN HOÀNG MAI\",\n                \"vCounty\": \"HNHM\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 5,\n                \"vCountyName\": \"HUYỆN THẠCH THẤT\",\n                \"vCounty\": \"HNTT\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 6,\n                \"vCountyName\": \"HUYỆN CHƯƠNG MỸ\",\n                \"vCounty\": \"HNCM\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 7,\n                \"vCountyName\": \"HUYỆN SÓC SƠN\",\n                \"vCounty\": \"HNSS\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 8,\n                \"vCountyName\": \"HUYỆN GIA LÂM\",\n                \"vCounty\": \"HNGL\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 9,\n                \"vCountyName\": \"QUẬN HAI BÀ TRƯNG\",\n                \"vCounty\": \"HNHT\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 10,\n                \"vCountyName\": \"QUẬN TÂY HỒ\",\n                \"vCounty\": \"HNTH\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 11,\n                \"vCountyName\": \"HUYỆN MÊ LINH\",\n                \"vCounty\": \"HNML\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 12,\n                \"vCountyName\": \"HUYỆN THANH TRÌ\",\n                \"vCounty\": \"HNTI\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 13,\n                \"vCountyName\": \"HUYỆN ỨNG HÒA\",\n                \"vCounty\": \"HNUH\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 14,\n                \"vCountyName\": \"QUẬN CẦU GIẤY\",\n                \"vCounty\": \"HNCG\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 15,\n                \"vCountyName\": \"HUYỆN PHÚC THỌ\",\n                \"vCounty\": \"HNPT\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 16,\n                \"vCountyName\": \"HUYỆN THANH OAI\",\n                \"vCounty\": \"HNTO\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 17,\n                \"vCountyName\": \"HUYỆN MỸ ĐỨC\",\n                \"vCounty\": \"HNMD\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 18,\n                \"vCountyName\": \"THỊ XÃ SƠN TÂY\",\n                \"vCounty\": \"HNST\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 19,\n                \"vCountyName\": \"HUYỆN ĐAN PHƯỢNG\",\n                \"vCounty\": \"HNDP\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 20,\n                \"vCountyName\": \"QUẬN LONG BIÊN\",\n                \"vCounty\": \"HNLB\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 21,\n                \"vCountyName\": \"HUYỆN QUỐC OAI\",\n                \"vCounty\": \"HNQO\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 22,\n                \"vCountyName\": \"QUẬN BA ĐÌNH\",\n                \"vCounty\": \"HNBD\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 23,\n                \"vCountyName\": \"QUẬN THANH XUÂN\",\n                \"vCounty\": \"HNTX\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 24,\n                \"vCountyName\": \"QUẬN ĐỐNG ĐA\",\n                \"vCounty\": \"HNDD\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 25,\n                \"vCountyName\": \"QUẬN NAM TỪ LIÊM\",\n                \"vCounty\": \"HNNL\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 26,\n                \"vCountyName\": \"QUẬN BẮC TỪ LIÊM\",\n                \"vCounty\": \"HNBL\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 27,\n                \"vCountyName\": \"HUYỆN PHÚ XUYÊN\",\n                \"vCounty\": \"HNPX\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 28,\n                \"vCountyName\": \"HUYỆN ĐÔNG ANH\",\n                \"vCounty\": \"HNDA\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 30,\n                \"vCountyName\": \"QUẬN HÀ ĐÔNG\",\n                \"vCounty\": \"HNHD\"\n            },\n            {\n                \"iStateId\": 1,\n                \"iCountyId\": 31,\n                \"vCountyName\": \"HUYỆN THƯỜNG TÍN\",\n                \"vCounty\": \"HNTN\"\n            }\n        ]\n    }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/generalConfigData.php",
    "title": "11. Lấy Config Data",
    "name": "11__L_y_Config_Data",
    "group": "Driver",
    "description": "<p>Không sử dụng. API này lấy về danh sách tỉnh và config data</p>",
    "version": "1.0.0",
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getFAQ.php",
    "title": "12. Lấy danh sách FAQ",
    "name": "12__L_y_danh_s_ch_FAQ",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu FAQ trả về</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": " {\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": [\n        {\n            \"iFaqcategoryId\": 33,\n            \"vTitle\": Hướng dẫn nạp ví tài khoản,\n            \"vImage\": 83766.,\n            \"vCode\": VN,\n            \"iUniqueId\": 3,\n            \"tUrl\": http://www.viet-go.com/huong-dan-nap-vi/,\n            \"Questions\": [\n                {\n                    \"iFaqcategoryId\": 3,\n                    \"vTitle\": Bạn có thể tìm hiểu về nó?,\n                    \"tAnswer\": <i><u>Contrairement à la croyance populaire, Lorem Ipsum est pas simplement du texte aléatoire. Il a des racines dans un morceau de la littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.</u></i>\n                },\n                {\n                    \"iFaqcategoryId\": 3,\n                    \"vTitle\": Lorem Ipsum est simplement faux texte?,\n                    \"tAnswer\": Il a non seulement survécu à cinq siècles, mais aussi le saut dans la composition électronique, restées pratiquement inchangées. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages Lorem Ipsum, et plus récemment avec le logiciel d'édition de bureau comme Aldus PageMaker y compris les versions de Lorem Ipsum.\n                },\n                {\n                    \"iFaqcategoryId\": 3,\n                    \"vTitle\": Lorem ipsume  Quetion?,\n                    \"tAnswer\": Il a non seulement survécu à cinq siècles, mais aussi le saut dans la composition électronique, restées pratiquement inchangées. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages Lorem Ipsum, et plus récemment avec le logiciel d'édition de bureau comme Aldus PageMaker y compris les versions de Lorem Ipsum.\n                }\n            ]\n        },\n        {\n            \"iFaqcategoryId\": 35,\n            \"vTitle\": Hướng dẫn bổ sung hồ sơ lái xe,\n            \"vImage\": 68427.,\n            \"vCode\": VN,\n            \"iUniqueId\": 4,\n            \"tUrl\": http://www.viet-go.com/huong-dan-bo-xung-ho-so/,\n            \"Questions\": null\n        },\n        {\n            \"iFaqcategoryId\": 37,\n            \"vTitle\": Hướng dẫn thêm/bớt loại xe,\n            \"vImage\": 54100.,\n            \"vCode\": VN,\n            \"iUniqueId\": 5,\n            \"tUrl\": http://www.viet-go.com/huong-dan-them-bot-loai-xe/,\n            \"Questions\": null\n        },\n        {\n            \"iFaqcategoryId\": 39,\n            \"vTitle\": Hướng nhận/huỷ chuyến đặt trước,\n            \"vImage\": 26986.,\n            \"vCode\": VN,\n            \"iUniqueId\": 6,\n            \"tUrl\": http://www.viet-go.com/huong-dan-nhan-huy-chuyen-dat-truoc/,\n            \"Questions\": null\n        },\n        {\n            \"iFaqcategoryId\": 41,\n            \"vTitle\": Chính sách phí sử dụng ứng dụng,\n            \"vImage\": 57935.,\n            \"vCode\": VN,\n            \"iUniqueId\": 7,\n            \"tUrl\": http://www.viet-go.com/chinh-sach-phi/,\n            \"Questions\": null\n        },\n        {\n            \"iFaqcategoryId\": 31,\n            \"vTitle\": Xem bảng giá,\n            \"vImage\": 46375.,\n            \"vCode\": VN,\n            \"iUniqueId\": 2,\n            \"tUrl\": http://www.viet-go.com/tro-giup-bang-gia/,\n            \"Questions\": [\n                {\n                    \"iFaqcategoryId\": 2,\n                    \"vTitle\": NoiBaiOnline hoạt động ở đâu?,\n                    \"tAnswer\": Hiện NoiBaiOnline có mặt tại khu vực Hà Nội và Sân bay Nội Bài.\n                },\n                {\n                    \"iFaqcategoryId\": 2,\n                    \"vTitle\": Đánh giá tài xế bằng cách nào?,\n                    \"tAnswer\": Sau khi kết thúc chuyến đi, ứng dụng sẽ tự hiển thị màn hình đánh giá (Rating) bạn chỉ cần chọn từ 1 đến 5 sao để đánh giá chuyến đi tùy theo mức độ hài lòng của mình.\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/bike/generateTrip.php",
    "title": "13. Nhận yêu cầu đơn Bike (xe máy)",
    "name": "13__Nh_n_y_u_c_u___n_Bike__xe_m_y_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "requestId",
            "description": "<p>Mã yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"requestId\": 75024\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu chuyến đi được tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>ID chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripcode",
            "description": "<p>Mã chữ chuyến đi (Ví dụ: GNTHM93A)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLat",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLong",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDaddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PAppVersion",
            "description": "<p>Chưa rõ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eFareType",
            "description": "<p>Kiểu thanh toán</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "APP_TYPE",
            "description": "<p>Kiểu dịch vụ (Bike/Ship/Truck)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": OK,\n       \"data\": {\n           \"iTripId\": 4852,\n           \"tripCode\": GNTHM93A,\n           \"tEndLat\": 20.9866676,\n           \"tEndLong\": 105.7835446,\n           \"tDaddress\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam,\n           \"PAppVersion\": 0,\n           \"eFareType\": Regular,\n           \"APP_TYPE\": Ride\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/ship/generateTrip.php",
    "title": "14. Nhận yêu cầu đơn Ship",
    "name": "14__Nh_n_y_u_c_u___n_Ship",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "requestId",
            "description": "<p>Mã yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"requestId\": 75024\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu chuyến đi được tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>ID chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripcode",
            "description": "<p>Mã chữ chuyến đi (Ví dụ: GNTHM93A)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLat",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLong",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDaddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PAppVersion",
            "description": "<p>Chưa rõ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eFareType",
            "description": "<p>Kiểu thanh toán</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "APP_TYPE",
            "description": "<p>Kiểu dịch vụ (Bike/Ship/Truck)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": OK,\n       \"data\": {\n           \"iTripId\": 4887,\n           \"tripCode\": GNT5FRZF,\n           \"tEndLat\": 21.0873555,\n           \"tEndLong\": 105.8094916,\n           \"tDaddress\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam,\n           \"PAppVersion\": 0,\n           \"eFareType\": Regular,\n           \"APP_TYPE\": Delivery\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/truck/generateTrip.php",
    "title": "15. Nhận yêu cầu đơn Truck",
    "name": "15__Nh_n_y_u_c_u___n_Truck",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "requestId",
            "description": "<p>Mã yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"requestId\": 75024\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu chuyến đi được tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>ID chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripcode",
            "description": "<p>Mã chữ chuyến đi (Ví dụ: GNTHM93A)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLat",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLong",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDaddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PAppVersion",
            "description": "<p>Chưa rõ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eFareType",
            "description": "<p>Kiểu thanh toán</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "APP_TYPE",
            "description": "<p>Kiểu dịch vụ (Bike/Ship/Truck)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": OK,\n       \"data\": {\n           \"iTripId\": 4887,\n           \"tripCode\": GNT5FRZF,\n           \"tEndLat\": 21.0873555,\n           \"tEndLong\": 105.8094916,\n           \"tDaddress\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam,\n           \"PAppVersion\": 0,\n           \"eFareType\": Regular,\n           \"APP_TYPE\": Truck\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/processEndTrip.php",
    "title": "16. Xác nhận kết thúc chuyến",
    "name": "16__X_c_nh_n_k_t_th_c_chuy_n",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>ghi chú của tài xế về chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"tripId\": 5024\n    \"comment\": Xe thủng săm kêu van hỏng\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu chuyến đi được tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "iTripLocationsID",
            "description": "<p>(sẽ loại bỏ sớm, ae ko cần quan tâm)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalFare",
            "description": "<p>Tổng cước phí</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currencySymbol",
            "description": "<p>Đơn vị tiền tệ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripStartTime",
            "description": "<p>Thời điểm bắt đầu chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripPaymentMode",
            "description": "<p>Phương thức thanh toán</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "discount",
            "description": "<p>Khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "formattedTripDate",
            "description": "<p>Thời điểm bắt đầu chuyến đi được định dạng 12h mode</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": OK,\n       \"data\": {\n           \"iTripsLocationsID\": true,\n           \"totalFare\": 0,\n           \"currencySymbol\": VND,\n           \"tripStartTime\": 2019-05-21 14:15:28,\n           \"tripPaymentMode\": Cash,\n           \"discount\": 0,\n           \"message\": Data Updated,\n           \"formattedTripDate\": 21-05-2019 at 02:15 pm\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/updateStatePoint.php",
    "title": "17. Cập nhật trạng thái điểm giao",
    "name": "17__C_p_nh_t_tr_ng_th_i__i_m_giao",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pointId",
            "description": "<p>Mã Id điểm giao</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "state",
            "description": "<p>1 nếu thành công; 0 nếu thất bại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reasion",
            "description": "<p>Lý do nếu state = 0 (thất bại)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Ghi chú của tài xế cho chuyến đi này</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"tripId\": 1234\n    \"poinId\": 156\n    \"state\" : 0\n    \"reasion\": xe bị hỏng, không giao được hàng\n    \"note\"  : xin lỗi khách hàng nhiều <3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/getServiceInfo.php",
    "title": "18. Lấy thông tin dịch vụ",
    "name": "18__L_y_th_ng_tin_d_ch_v_",
    "group": "Driver",
    "description": "<p>API này không yêu cầu truyền gì lên</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>trả về các loại hình dịch vụ</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": [\n           {\n               \"iVehicleTypeId\": \"152\",\n               \"iVehicleCategoryId\": \"0\",\n               \"iCountryId\": \"230\",\n               \"iStateId\": \"-1\",\n               \"iCityId\": \"-1\",\n               \"vAddress\": \"\",\n               \"vVehicleType\": \"HNI-GOBIKE SHIP\",\n               \"vVehicleTypeApp1\": \"GrapBike SHIP\",\n               \"vVehicleType_VN\": \"VTP-GO-SHIP\",\n               \"vVehicleType_EN\": \"VTP-GO-SHIP\",\n               \"size\": null,\n               \"weight\": null,\n               \"eFareType\": \"Regular\",\n               \"fFixedFare\": \"0\",\n               \"fPricePerKM\": \"0\",\n               \"fPricePerKM_0\": \"14500\",\n               \"fPricePerKM_30\": \"4500\",\n               \"fPricePerKM_60\": \"4500\",\n               \"fPricePerMin\": \"0\",\n               \"fPricePerHour\": \"0\",\n               \"iBaseFare\": \"0\",\n               \"iBaseFare_NB_HN\": \"120000\",\n               \"iBaseFare_HN_NB\": \"120000\",\n               \"iBaseFare_30\": \"3600\",\n               \"fCommision\": \"15\",\n               \"iMinFare\": \"14500\",\n               \"fPickUpPrice\": \"1\",\n               \"fNightPrice\": \"0\",\n               \"ePickStatus\": \"Inactive\",\n               \"eNightStatus\": \"Inactive\",\n               \"tPickStartTime\": \"00:00:00\",\n               \"tPickEndTime\": \"00:00:00\",\n               \"tNightStartTime\": \"00:00:00\",\n               \"tNightEndTime\": \"00:00:00\",\n               \"iPersonSize\": \"1\",\n               \"vLogo\": \"1545994537_ic_car_HNI-GOBIKE.png\",\n               \"vLogo1\": \"1545994537_ic_car_HNI-GOBIKE.png\",\n               \"eType\": \"Ride\",\n               \"eIconType\": \"Bike\",\n               \"tMonPickStartTime\": \"00:00:00\",\n               \"tMonPickEndTime\": \"05:00:00\",\n               \"tMonPickEndTime1\": \"09:30:00\",\n               \"tMonPickStartTime2\": \"16:30:00\",\n               \"tMonPickStartTime1\": \"07:00:00\",\n               \"fMonPickUpPrice\": \"1\",\n               \"tTuePickStartTime\": \"00:00:00\",\n               \"tTuePickEndTime\": \"05:30:00\",\n               \"fTuePickUpPrice\": \"1\",\n               \"tWedPickStartTime\": \"00:00:00\",\n               \"tWedPickEndTime\": \"05:30:00\",\n               \"fWedPickUpPrice\": \"1\",\n               \"tThuPickStartTime\": \"00:00:00\",\n               \"tThuPickEndTime\": \"05:30:00\",\n               \"fThuPickUpPrice\": \"1\",\n               \"tFriPickStartTime\": \"00:00:00\",\n               \"tFriPickEndTime\": \"05:30:00\",\n               \"fFriPickUpPrice\": \"1\",\n               \"tSatPickStartTime\": \"00:00:00\",\n               \"tSatPickEndTime\": \"05:30:00\",\n               \"fSatPickUpPrice\": \"1\",\n               \"tSunPickStartTime\": \"00:00:00\",\n               \"tSunPickEndTime\": \"05:30:00\",\n               \"fSunPickUpPrice\": \"1\",\n               \"eAllowQty\": \"\",\n               \"iMaxQty\": \"0\",\n               \"fVisitFee\": \"0\",\n               \"fCancellationFare\": \"0\",\n               \"iCancellationTimeLimit\": \"0\",\n               \"fCommisionlv1\": \"15\",\n               \"fCommisionlv2\": \"15\",\n               \"tTuePickEndTime1\": \"09:30:00\",\n               \"tTuePickStartTime1\": \"07:00:00\",\n               \"tWedPickEndTime1\": \"12:00:00\",\n               \"tWedPickStartTime1\": \"07:00:00\",\n               \"tThuPickStartTime1\": \"07:00:00\",\n               \"tThuPickEndTime1\": \"09:30:00\",\n               \"tSunPickStartTime1\": \"00:00:00\",\n               \"tSunPickEndTime1\": \"00:00:00\",\n               \"tSatPickStartTime1\": \"00:00:00\",\n               \"tSatPickEndTime1\": \"00:00:00\",\n               \"tFriPickStartTime1\": \"07:00:00\",\n               \"tFriPickEndTime1\": \"09:30:00\",\n               \"vStateNotAllow\": \"\",\n               \"iOrder\": \"4\",\n               \"ePickNormalTime\": \"Inactive\",\n               \"vCarType\": \"gobike\",\n               \"iFare2Hours\": \"0\",\n               \"iFare4Hours\": \"0\",\n               \"iFare8Hours\": \"0\",\n               \"iFare12Hours\": \"0\",\n               \"iFare24Hours\": \"0\",\n               \"eAllowRent\": \"no\",\n               \"tMonPickEndTime2\": \"19:30:00\",\n               \"tMonPickEndTime3\": \"00:00:00\",\n               \"tTuePickEndTime2\": \"19:30:00\",\n               \"tTuePickEndTime3\": \"00:00:00\",\n               \"tWedPickEndTime2\": \"19:30:00\",\n               \"tWedPickEndTime3\": \"00:00:00\",\n               \"tMonPickStartTime3\": \"00:00:00\",\n               \"tTuePickStartTime2\": \"16:30:00\",\n               \"tTuePickStartTime3\": \"00:00:00\",\n               \"tWedPickStartTime2\": \"16:30:00\",\n               \"tWedPickStartTime3\": \"00:00:00\",\n               \"tThuPickStartTime2\": \"16:30:00\",\n               \"tThuPickStartTime3\": \"00:00:00\",\n               \"tThuPickEndTime2\": \"19:30:00\",\n               \"tThuPickEndTime3\": \"00:00:00\",\n               \"tSunPickStartTime2\": \"00:00:00\",\n               \"tSunPickStartTime3\": \"00:00:00\",\n               \"tSunPickEndTime2\": \"00:00:00\",\n               \"tSunPickEndTime3\": \"00:00:00\",\n               \"tSatPickStartTime2\": \"00:00:00\",\n               \"tSatPickStartTime3\": \"00:00:00\",\n               \"tSatPickEndTime2\": \"00:00:00\",\n               \"tSatPickEndTime3\": \"00:00:00\",\n               \"tFriPickStartTime2\": \"16:30:00\",\n               \"tFriPickStartTime3\": \"00:00:00\",\n               \"tFriPickEndTime2\": \"19:30:00\",\n               \"tFriPickEndTime3\": \"00:00:00\",\n               \"vLogoBi\": \"1546399576_ic_car_HNI-GOBIKE.png\",\n               \"vLogoBi1\": \"1546399576_ic_car_HNI-GOBIKE.png\"\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/declineTripRequest.php",
    "title": "19. Từ chối yêu câu cầu chuyến mới",
    "name": "19__T__ch_i_y_u_c_u_c_u_chuy_n_m_i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "passengerId",
            "description": "<p>Mã Id của khách hàng</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{    \n    \"passengerId\": 507465\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/driverArrived.php",
    "title": "20. Tài xế đến điểm đầu",
    "name": "20__T_i_x____n__i_m___u",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eIconType",
            "description": "<p>undefine</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Dlatitude",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Dlongitude",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DAddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\":\n        \"eIconType\": \"\",\n           \"DLatitude\": 21.0873555,\n           \"DLongitude\": 105.8094916,\n           \"DAddress\": Phố Phú Thượng, Phú Xá, Phú Thượng, Tây Hồ, Hà Nội, Vietnam\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/startTrip.php",
    "title": "21. Tài xế bắt đầu chuyến đi",
    "name": "21__T_i_x__b_t___u_chuy_n__i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/submitRating.php",
    "title": "22. Đánh giá khách hàng",
    "name": "22____nh_gi__kh_ch_h_ng",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rating",
            "description": "<p>số sao đánh giá cho khách hàng (&gt;=0; &lt;=5)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ghi chú đánh giá</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"rating\": 4.5\n    \"message\": Khách hàng cục xúc\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/getListReason.php",
    "title": "23. Lấy danh sách lí do",
    "name": "23__L_y_danh_s_ch_l__do",
    "group": "Driver",
    "description": "<p>API lấy danh sách các lý do</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại danh sách. (ví dụ: TRANSFERREASON)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    https://vtmove-apiv2.ddns.net/api/v1/getListReason.php?type=TRANSFERREASON\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getDriverRideHistory.php",
    "title": "24. Lấy lịch sử chuyến đi",
    "name": "24__L_y_l_ch_s__chuy_n__i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Truyền vào ngày cần xem (yyyy-mm-dd)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tripCode",
            "description": "<p>Truyền vào mã chữ chuyến đi (tìm đích danh chuyến đi)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{   \n    \"date\": 2019-05-19\n    \"tripCode\": GTN928DZ\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fPricePerKM",
            "description": "<p>Giá cước trên quãng đường (KM)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "discountFare",
            "description": "<p>Giá trị Khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "bonusDriver",
            "description": "<p>Thưởng cho Tài xế (hiện tại là 15%)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_fare",
            "description": "<p>Tổng giá cước sau khi trừ khuyến mại</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_charge",
            "description": "<p>Tổng giá cước sau khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "earnings",
            "description": "<p>Thu nhập lí thuyết của Tài xế (sau khi MyGo thu chiết khấu)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "TotalEarning",
            "description": "<p>Thu nhập thực tế của Tài xế (lý thuyết + thưởng)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "TripDate",
            "description": "<p>Ngày phát sinh chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "TripCount",
            "description": "<p>Tổng số chuyến đi trong thời gian lọc</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "AvgRating",
            "description": "<p>Trung bình vote trong thời gian lọc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CurrencySymbol",
            "description": "<p>Đơn vị tiền tệ</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Số lượng trang kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Size của mối trang</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareOfCommision",
            "description": "<p>Mygo thu chiết khấu</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForCOD",
            "description": "<p>Cước thu hộ COD</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForPointDelivery",
            "description": "<p>Cước phí thêm điểm giao</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareBaseDistance",
            "description": "<p>Cước phí cơ bản trên tổng quãng đường</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rawFare",
            "description": "<p>Tổng cước phí chưa trừ khuyến mãi ( = total_fare + discountFare )</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverIncome",
            "description": "<p>Thu nhập lý thuyết của chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"fPricePerKM\": 114000,\n           \"discountFare\": 0,\n           \"bonusDriver\": 18600,\n           \"total_fare\": 0,\n           \"total_charge\": 129000,\n           \"earnings\": 104200,\n           \"TotalEarning\": 162000,\n           \"TripDate\": \"24-05-2019\",\n           \"TripCount\": 2,\n           \"AvgRating\": 0,\n           \"CurrencySymbol\": \"VND\",\n           \"page\": 1,\n           \"pageSize\": 30,\n           \"listTrip\": [\n               {\n                   \"iTripId\": 5068,\n                   \"fTripGenerateFare\": 0,\n                   \"bonusDriver\": 4350,\n                   \"fareOfCommision\": 5800,\n                   \"additionalFareForCOD\": 0,\n                   \"additionalFareForPointDelivery\": 0,\n                   \"fareBaseDistance\": 29000,\n                   \"discountFare\": 0,\n                   \"rawFare\": 29000,\n                   \"driverIncome\": 23200,\n                   \"fTipPrice\": 0,\n                   \"fPricePerKM\": 29000,\n                   \"tripType\": \"Km\",\n                   \"tripDistance\": 6.9,\n                   \"tripStatus\": \"Finished\",\n                   \"fRatio_VND\": 1,\n                   \"vRatingU\": 0,\n                   \"vMessageU\": \"\",\n                   \"vName\": \"an\",\n                   \"vLastName\": \"\",\n                   \"vImage\": \"\",\n                   \"trip_code\": \"GNTE7XB3\",\n                   \"type\": \"Ride\",\n                   \"requestTime\": \"2019-05-24 15:02:16\",\n                   \"vehicleTypeId\": 159,\n                   \"startLat\": \"21.0067\",\n                   \"startLong\": \"105.846\",\n                   \"startAddress\": \"20 Ngõ 30 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam\",\n                   \"endLat\": \"20.9866676\",\n                   \"endLong\": \"105.7835446\",\n                   \"endAddress\": \"66 LK6A, Hà Đông, Hà Nội, Việt Nam\",\n                   \"last_progress_trip\": \"Finished\",\n                   \"last_progress_trip_code\": \"PROCESS_TRIP_05\",\n                   \"last_progress_trip_name\": \"Thành công\"\n               }\n           ]\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getListPushNotification.php",
    "title": "25. Lấy danh sách Notification",
    "name": "25__L_y_danh_s_ch_Notification",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "defaultValue": "1;",
            "description": "<p>Kết quả trả về sẽ được chia thành số trang nếu truyền lên</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Số lượng kết quả ở mỗi trang</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"page\": 2\n    \"pageSize\": 10\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    https://vtmove-apiv2.ddns.net/api/v1/driver/getListPushNotification.php?page=1&pageSize=10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Data trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalRecord",
            "description": "<p>Tổng số bản ghi Notification</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalPage",
            "description": "<p>Tổng số Trang kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Tham số số lượng trang truyền lên</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Tham số số lượng bản ghi mỗi trang truyền lên</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iPushnotificationId",
            "description": "<p>Mã Id của thông báo (số nhảy, đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eUserType",
            "description": "<p>Loại người dùng nhận thông báo (driver / rider)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iUserId",
            "description": "<p>Mã Id của người nhận thông báo (iUserId / iDriverId)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isRead",
            "description": "<p>Đã đọc hay chưa (false / true) (đang sai kiểu)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tMessage",
            "description": "<p>Tiêu đề thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDepscription",
            "description": "<p>Mô tả thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tContent",
            "description": "<p>Nội dung chi tiết thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Chưa rõ (khả năng là phân loại thông báo: Khuyến mãi, chuyến đi v..v)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dDateTime",
            "description": "<p>Thời gian tạo/gửi thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "IP_ADDRESS",
            "description": "<p>Chưa rõ (chắc là địa chỉ IP của máy nhận thông báo ?)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vImage",
            "description": "<p>Link chứa ảnh thông báo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eAutoSend",
            "description": "<p>Có tự động gửi hay không (No / Yes)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"totalRecord\": 24,\n           \"totalPage\": 3,\n           \"page\": 1,\n           \"pageSize\": 10,\n           \"data\": [\n               {\n                   \"iPushnotificationId\": 96,\n                   \"eUserType\": driver,\n                   \"iUserId\": 607954,\n                   \"isRead\": false,\n                   \"tMessage\": Khuyến mãi lớn tháng 6,\n                   \"tDepscription\": Tặng 20% cước phí hoàn lại vào ví cho tài xế đăng kí mới,\n                   \"tContent\": <p> Khuyến mãi lớn tháng 6. Đây là nội dung chi tiết của thông báo này nha Đông Đụt  ^_^ </p>,\n                   \"type\": \"\",\n                   \"dDateTime\": 2019-04-05 18:12:14,\n                   \"IP_ADDRESS\": \"\",\n                   \"vImage\": \"\",\n                   \"eAutoSend\": No\n               }\n           ]\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getTransactionHistory.php",
    "title": "26. Lấy lịch sử giao dịch ví",
    "name": "26__L_y_l_ch_s__giao_d_ch_v_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "defaultValue": "1;",
            "description": "<p>Kết quả trả về sẽ được chia thành số trang nếu truyền lên</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Số lượng kết quả ở mỗi trang</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "defaultValue": "All",
            "description": "<p>, loại giao dịch (Credit/Debit/All)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"page\": 2\n    \"pageSize\": 10\n    \"type\": Credit\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    https://vtmove-apiv2.ddns.net/api/v1/driver/getListPushNotification.php?page=1&pageSize=10&type=Credit\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>thông báo trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Data trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalRecord",
            "description": "<p>Tổng số bản ghi Notification</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "totalPage",
            "description": "<p>Tổng số Trang kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Tham số số lượng trang truyền lên</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>Tham số số lượng bản ghi mỗi trang truyền lên</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iUserWalletId",
            "description": "<p>Id giao dịch trong lịch sử ví (mã số nhảy liên tiếp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Stirng",
            "optional": false,
            "field": "iUserID",
            "description": "<p>Mã Id của tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eUserType",
            "description": "<p>Driver (tương lai bảng này có làm thêm ví cho khách hàng thì có thêm kiểu Customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iBalance",
            "description": "<p>Số tiền thực hiện cộng (hoặc trừ) trong giao dịch này</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eType",
            "description": "<p>Credit nếu là giao dịch cộng tiền, Debit nếu là giao dịch trừ tiền</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iTripId",
            "description": "<p>Mã chuyến đi gắn với giao dịch</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eFor",
            "description": "<p>Kiểu giao dịch. Booking nếu là giao dịch liên quan đến chuyến đi, Deposit nếu là nạp tiền vào ví</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDescription",
            "description": "<p>Mô tả giao dịch</p>"
          },
          {
            "group": "Success 200",
            "type": "Srting",
            "optional": false,
            "field": "ePaymentStatus",
            "description": "<p>Trạng thái giao dịch (tự suy đoán, có thể có thêm pending, nhưng hiện tại ko cần quan tâm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dDate",
            "description": "<p>Thời điểm phát sinh giao dịch</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"totalRecord\": 74,\n           \"totalPage\": 19,\n           \"page\": 1,\n           \"pageSize\": 4,\n           \"data\": [\n               {\n                   \"iUserWalletId\": \"4030\",\n                   \"iUserId\": \"607954\",\n                   \"eUserType\": \"Driver\",\n                   \"iBalance\": \"5.800 VND\",\n                   \"eType\": \"Credit\",\n                   \"iTripId\": \"5074\",\n                   \"eFor\": \"Booking\",\n                   \"tDescription\": \" Số tiền 5800 được cộng vào ví của bạn do chuyến số#\",\n                   \"ePaymentStatus\": \"Settelled\",\n                   \"dDate\": \"24-05-2019 15:04:09\",\n                   \"fRatio_VND\": \"1.000000\",\n                   \"fRatio_USD\": \"1.000000\",\n                   \"iPaymentId\": \"0\",\n                   \"iAdminId\": \"0\",\n                   \"iTransIdMoMo\": \"0\",\n                   \"currentbal\": \"5.800 VND\",\n                   \"dDateOrig\": \"2019-05-24 15:04:09\"\n               },\n               {\n                   \"iUserWalletId\": \"4029\",\n                   \"iUserId\": \"607954\",\n                   \"eUserType\": \"Driver\",\n                   \"iBalance\": \"5.800 VND\",\n                   \"eType\": \"Debit\",\n                   \"iTripId\": \"5074\",\n                   \"eFor\": \"Booking\",\n                   \"tDescription\": \" Số tiền 5800 bị trừ từ ví của bạn do chuyến số#49083456\",\n                   \"ePaymentStatus\": \"Settelled\",\n                   \"dDate\": \"24-05-2019 15:03:35\",\n                   \"fRatio_VND\": \"1.000000\",\n                   \"fRatio_USD\": \"1.000000\",\n                   \"iPaymentId\": \"0\",\n                   \"iAdminId\": \"0\",\n                   \"iTransIdMoMo\": \"0\",\n                   \"currentbal\": \" 0 VND\",\n                   \"dDateOrig\": \"2019-05-24 15:03:35\"\n               },\n               {\n                   \"iUserWalletId\": \"4027\",\n                   \"iUserId\": \"607954\",\n                   \"eUserType\": \"Driver\",\n                   \"iBalance\": \"4.350 VND\",\n                   \"eType\": \"Credit\",\n                   \"iTripId\": \"5068\",\n                   \"eFor\": \"Booking\",\n                   \"tDescription\": \" Số tiền 4350 được cộng vào ví của bạn do chuyến số#77410653\",\n                   \"ePaymentStatus\": \"Settelled\",\n                   \"dDate\": \"24-05-2019 15:02:16\",\n                   \"fRatio_VND\": \"1.000000\",\n                   \"fRatio_USD\": \"1.000000\",\n                   \"iPaymentId\": \"0\",\n                   \"iAdminId\": \"0\",\n                   \"iTransIdMoMo\": \"0\",\n                   \"currentbal\": \"4.350 VND\",\n                   \"dDateOrig\": \"2019-05-24 15:02:16\"\n               },\n               {\n                   \"iUserWalletId\": \"4017\",\n                   \"iUserId\": \"607954\",\n                   \"eUserType\": \"Driver\",\n                   \"iBalance\": \"5.800 VND\",\n                   \"eType\": \"Debit\",\n                   \"iTripId\": \"5068\",\n                   \"eFor\": \"Booking\",\n                   \"tDescription\": \" Số tiền 5800 bị trừ từ ví của bạn do chuyến số#77410653\",\n                   \"ePaymentStatus\": \"Settelled\",\n                   \"dDate\": \"24-05-2019 14:50:07\",\n                   \"fRatio_VND\": \"1.000000\",\n                   \"fRatio_USD\": \"1.000000\",\n                   \"iPaymentId\": \"0\",\n                   \"iAdminId\": \"0\",\n                   \"iTransIdMoMo\": \"0\",\n                   \"currentbal\": \"-1.450 VND\",\n                   \"dDateOrig\": \"2019-05-24 14:50:07\"\n               }\n           ],\n           \"user_available_balance_default\": \"205200 VND\",\n           \"user_available_balance\": 205.2,\n           \"user_available_main_wallet\": 124.05,\n           \"user_available_fPromotion_wallet\": 81.15,\n           \"user_available_fTransfers_wallet\": 0\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/car/generateTrip.php",
    "title": "27. Nhận yêu cầu đơn Car (ô tô)",
    "name": "27__Nh_n_y_u_c_u___n_Car____t__",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "requestId",
            "description": "<p>Mã yêu cầu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"requestId\": 75024\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu chuyến đi được tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "iTripId",
            "description": "<p>ID chuyến đi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tripcode",
            "description": "<p>Mã chữ chuyến đi (Ví dụ: GNTHM93A)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLat",
            "description": "<p>Vĩ độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tEndLong",
            "description": "<p>Kinh độ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tDaddress",
            "description": "<p>Địa chỉ điểm cuối</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PAppVersion",
            "description": "<p>Chưa rõ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eFareType",
            "description": "<p>Kiểu thanh toán</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "APP_TYPE",
            "description": "<p>Kiểu dịch vụ (Bike/Ship/Truck)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": OK,\n       \"data\": {\n           \"iTripId\": 5438,\n           \"tripCode\": GNTHM93A,\n           \"tEndLat\": 20.9866676,\n           \"tEndLong\": 105.7835446,\n           \"tDaddress\": 66 LK6A, Hà Đông, Hà Nội, Việt Nam,\n           \"PAppVersion\": 0,\n           \"eFareType\": Regular,\n           \"APP_TYPE\": Car\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/chargeWallet.php",
    "title": "28. Nạp tiền vào Ví",
    "name": "28__N_p_ti_n_v_o_V_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>Số tiền cần nạp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"amount\": 1000000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Link để mở cổng thanh toán Viettel Pay</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"url\": \"http://125.235.40.34:8801/PaymentGateway/payment?billcode=MYGO6079541559617713&command=PAYMENT&desc=N%E1%BA%A1p+ti%E1%BB%81n&locale=Vi&merchant_code=MYGO&order_id=MYGO6079541559617713&other_info=&customer_bill_info=&return_url=https%3A%2F%2Fvtmove-apiv2.ddns.net%2Fapi%2Fv1%2FpaymentResult.php&cancel_url=&trans_amount=1&version=2.0&check_sum=j5q6UxNZs8%2FcQSuANA%2FBVo92Qfo%3D\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/driver/getDetailBillForDriver.php",
    "title": "29. Lấy chi tiết biên lai chuyến đi",
    "name": "29__L_y_chi_ti_t_bi_n_lai_chuy_n__i",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "tripId",
            "description": "<p>Mã Id chuyến đi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"tripId\": 4898\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "pricePerKm",
            "description": "<p>Cước phí dựa trên quãng đường</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "discountFare",
            "description": "<p>Cước khuyến mãi giảm giá (của KH)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "bonusDriver",
            "description": "<p>Thưởng cho tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverIncome",
            "description": "<p>Thu nhập lý thuyết của tài xế (sau khi trừ chiết khấu)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareOfCommision",
            "description": "<p>MyGo thu chiết khấu</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_fare",
            "description": "<p>Tổng giá cước trước khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_charge",
            "description": "<p>Tổng giá cước sau khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForCOD",
            "description": "<p>Cước phí do phát sinh thu hộ COD</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "additionalFareForPointDelivery",
            "description": "<p>Cước phí do phát sinh thêm điểm giao (đơn ship/ truck)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "fareBaseDistance",
            "description": "<p>Cước phí dựa trên quãng đường</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"pricePerKm\": 108000,\n           \"discountFare\": 0,\n           \"bonusDriver\": 18450,\n           \"driverIncome\": 98400,\n           \"fareOfCommision\": 24600,\n           \"serviceDetail\": {\n               \"service_detail_name\": null,\n               \"amount\": null\n           },\n           \"total_fare\": 0,\n           \"total_charge\": 123000,\n           \"additionalFareForCOD\": 0,\n           \"additionalFareForPointDelivery\": 15000,\n           \"fareBaseDistance\": 108000\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/signUp.php",
    "title": "30. Tài xế Xã hội đăng ký",
    "name": "30__T_i_x__X__h_i___ng_k_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenVerify",
            "description": "<p>Token server trả về khi call API đăng kí (đối với tài khoản chưa tồn tại)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Android (google Inc) or iOS (apple Inc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Token thiết bị dùng để push notify</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Tên của TX</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Họ của TX</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "cityId",
            "description": "<p>Mã ID tỉnh thành</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "makeId",
            "description": "<p>Mã ID hãng xe</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "modelId",
            "description": "<p>Mã ID model của xe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licencePlate",
            "description": "<p>Biển số xe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carType",
            "description": "<p>Mã dịch vụ đăng kí (159 hoặc 156)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appVersion",
            "description": "<p>Phiên bản ứng dụng hiện tại</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageId",
            "description": "<p>Danh sách các Id ảnh</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\n    \"tokenVerify\": EMAWfqVlBdyEsGWpUIFoqH6ZCJZBRPqdCjmt8CUg4yJ06WAqpZCSjqkFZCw2EPOP85cmhlrVSenhsRiNLGfuhsdAMmxmvVaSBdj8iqS1CgMgZDZD\n    \"deviceType\": Android\n    \"deviceToken\": dyEsGWpUIFoqH6ZCJZBRPqdCjmt8CU\n    \"firstName\": An\n    \"LastName\": Mai \n    \"cityId\": 1\n    \"makeId\": 2\n    \"modelId\": 3\n    \"licencePlate\": 29P1 - 57048\n    \"carType\": 159\n    \"imageId\": 1,2,3,4 \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token phiên làm việc của Tài khoản ;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"token\": \"eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NjAyMzk2NTgiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTY1NDIzNjU4LCJ1c2VySWQiOjYwODU0M30.5qlWHnYcbAyeWb0201XBZrAe5nuf0UE5NbLDrxpu1no\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/v1/getVehicleModel.php",
    "title": "31. Lấy danh sách Mã phương tiện",
    "name": "31__L_y_danh_s_ch_M__ph__ng_ti_n",
    "group": "Driver",
    "description": "<p>API này không cần truyền gì lên</p>",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Id",
            "description": "<p>Mã Id hãng xe/ phương tiện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Hãng xe/ tên phương tiện</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "model",
            "description": "<p>Danh sách các model thuộc hãng</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "makeId",
            "description": "<p>Mã Id của hãng xe</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": [\n            {\n               \"id\": 129,\n               \"name\": \"Chevrolet\",\n               \"model\": [\n                   {\n                       \"id\": 1247,\n                       \"makeId\": 129,\n                       \"name\": \"AVEO\"\n                   },\n                   {\n                       \"id\": 1322,\n                       \"makeId\": 129,\n                       \"name\": \"Captiva\"\n                   },\n                   {\n                       \"id\": 1248,\n                       \"makeId\": 129,\n                       \"name\": \"CRUZE\"\n                   },\n                   {\n                       \"id\": 1280,\n                       \"makeId\": 129,\n                       \"name\": \"ORLANDO\"\n                   },\n                   {\n                       \"id\": 1246,\n                       \"makeId\": 129,\n                       \"name\": \"SPARK\"\n                   }\n               ]\n           }\n       }        \n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/uploadFile.php",
    "title": "32. Upload ảnh",
    "name": "32__Upload__nh",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Chọn file gửi lên</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Driver hoặc Passenger</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã bảo mật (hiện hardcode)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgType",
            "description": "<p>Kiểu giấy tờ trong ảnh ( passpost = CMT; sign = chữ ký,phù hiệu; img = ảnh thường)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"file\": nhatkyvanganh.mp4\n    \"type\": Driver\n    \"key\": YmYhGBglbRsMH9EkbfKkebILBNM=\n    \"imgType\": passport \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Id",
            "description": "<p>Mã Id file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>URL dẫn tới nơi lưu ảnh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Loại User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgType",
            "description": "<p>loại file (img, video...)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"id\": 3,\n           \"name\": \"https://vtmove-apiv2.ddns.net/webimages/upload/Driver/2019_06_11/1560250232_94720.jpg\",\n           \"type\": \"Driver\",\n           \"imgType\": \"img\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/requestToVTPay.php",
    "title": "33. Request to Viettel Pay",
    "name": "33__Request_to_Viettel_Pay",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "daily_amount_limit",
            "description": "<p>hạn mức tối đa trên ngày</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "trans_amount_limit",
            "description": "<p>hạn mức tối đa trên 1 giao dịch</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"daily_amount_limit\": 500000\n     \"trans_amount_limit\": 100000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "merchant_msisdn",
            "description": "<p>Số điện thoại để liên kết VT Pay</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "merchant_code",
            "description": "<p>Mã đối tác (truyền lên mặc định là MYGO)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>Mã giao dịch lưu bên phía đối tác(mỗi lần thực hiện là 1 mã mới)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Phiên bản của bên Viettel Pay, hiện tại mặc định là 2.0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Luôn luôn là 0 (viettel Pay ghi thế )</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "daily_amount_limit",
            "description": "<p>Hạn mức trên ngày (Phải lớn hơn hạn mức/lần giao dịch). Đây là hạn mức mặc định.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "trans_amount_limit",
            "description": "<p>hạn mức trên một lần giao dịch (Phải nhỏ hơn hạn mức/ngày giao dịch). Là đăng ký nên giá trị này là mặc định</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageSuccess",
            "description": "<p>Là url mà viettel sẽ redirect đến khi giao dịch thành công.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageError",
            "description": "<p>Là url mà viettel sẽ redirect đến khi giao dịch thất bại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageResult",
            "description": "<p>Là url mà viettel sẽ POST data kết quả đăng ký</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"merchant_msisdn\": \"0977212594\",\n           \"merchant_code\": \"MYGO\",\n           \"order_id\": \"MGCONNECT_YP0CUUI9PPU1IBWV\",\n           \"version\": \"2.0\",\n           \"Type\": \"0\",\n           \"daily_amount_limit\": 500000,\n           \"trans_amount_limit\": 100000,\n           \"pageSuccess\": \"https://vtmove-apiv2.ddns.net/api/v1/pageSuccessVTPay.php\",\n           \"pageError\": \"https://vtmove-apiv2.ddns.net/api/v1/pageErrorVTPay.php\",\n           \"pageResult\": \"https://vtmove-apiv2.ddns.net/api/v1/pageResultVtPay.php\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/getBalance.php",
    "title": "34. Truy vấn số dư ví",
    "name": "34__Truy_v_n_s__d__v_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n       Hiện chưa có example!\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/getInfomationByPhone.php",
    "title": "35. Lấy thông tin tài xế bằng SĐT",
    "name": "35__L_y_th_ng_tin_t_i_x__b_ng_S_T",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "msisdn",
            "description": "<p>Số điện thoại cần tra cứu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"msisdn\": 0982405200\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>dữ liệu tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã ID của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Họ tên đầy đủ của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "service",
            "description": "<p>Dịch vụ Tài xế đã đăng kí</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "str_service",
            "description": "<p>Tên dịch vụ Tài xế đăng kí</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"driverId\": 608722,\n           \"name\": \"Mai An\",\n           \"fullName\": \"Mai An An\",\n           \"service\": [\n               {\n                   \"159\": \"Xe máy\"\n               }\n           ],\n           \"str_service\": \"Xe máy\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/updateDriverProfile.php",
    "title": "36. Update Driver Profile",
    "name": "36__Update_Driver_Profile",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "passport[]",
            "description": "<p>File ảnh chụp chứng minh thư (2 mặt trước sau)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "sign",
            "description": "<p>File ảnh chụp phù hiệu xe</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>File ảnh đại diện</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "license[]",
            "description": "<p>File ảnh chụp Giấy phép lái xe (2 mặt trước sau)</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "contract[]",
            "description": "<p>File ảnh chụp hồ sơ hợp đồng</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã ID tài xế</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licence",
            "description": "<p>Biển số xe đăng kí</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "cityId",
            "description": "<p>Id Thành phố (bảng Provinces)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "modelId",
            "description": "<p>ID loại xe (bảng model)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "makeId",
            "description": "<p>ID hãng xe (bảng make)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "carType[]",
            "description": "<p>Dịch vụ đăng kí (152 = ship, 156 = ô tô, 159 = xe máy, 16X  = Xe tải)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxiName",
            "description": "<p>Tên Hãng taxi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/getDriverByPhoneWeb.php",
    "title": "37. Lấy thông tin tài xế bằng SĐT (v2 Web)",
    "name": "37__L_y_th_ng_tin_t_i_x__b_ng_S_T__v2_Web_",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "msisdn",
            "description": "<p>Số điện thoại tài xế</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n    \"msisdn\": 0982405200\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "driverId",
            "description": "<p>Mã ID của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tên tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Họ tên đầy đủ của Tài xế</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Thời gian ghi nhận đăng kí</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Trạng thái hồ sơ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Đường dẫn link ảnh tới ảnh đại diện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taxiName",
            "description": "<p>Tên hãng taxi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Tỉnh thành đăng kí</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iMakeId",
            "description": "<p>ID hãng xe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iModelId",
            "description": "<p>ID loại xe (thuộc hãng xe)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vLicencePlate",
            "description": "<p>Biển số xe đăng kí</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Các ảnh trong hồ sơ (bằng lái, phù hiệp, Chứng minh thư ...)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n       \"message\": \"OK\",\n       \"data\": {\n           \"driverId\": \"608670\",\n           \"name\": \"Dat\",\n           \"fullName\": \"Dat \",\n           \"phone\": \"0904309423\",\n           \"createdAt\": \"2019-06-18 18:05:57\",\n           \"state\": \"wait\",\n           \"avatar\": \"\",\n           \"taxiName\": null,\n           \"city\": \"Hà Nội\",\n           \"service\": {\n               \"iMakeId\": \"135\",\n               \"iModelId\": \"1323\",\n               \"vLicencePlate\": \"29D2-11445\"\n           },\n           \"images\": []\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/api/v1/driver/logout.php",
    "title": "Đăng xuất",
    "name": "__ng_xu_t",
    "group": "Driver",
    "description": "<p>Môi trường test: <a href=\"https://vtmove-apiv2.ddns.net\">https://vtmove-apiv2.ddns.net</a></p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=UTF-8</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJjb21wYW55IjoiVmlldHRlbEdvLWFwaTt2PTEiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQLTE1NTg0MDQ2OTkiLCJpc3MiOiJTS2JNckxhZ3d5VVduSkxyZ3BQcTE1RXpPVnozdWFVamZQIiwiZXhwIjoxNTYzNTg4Njk5LCJ1c2VySWQiOiI2MDc1ODQifQ.xqUxOm_h3q4IYxfCgz3MFfHz55HPleWvBEv-_QUmsAo\"\n    \"Content-Type\": \"application/json; charset=UTF-8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"OK\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/index.js",
    "groupTitle": "Driver"
  }
] });
