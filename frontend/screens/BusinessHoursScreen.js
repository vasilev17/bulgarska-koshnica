import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import WorkingDayHours from "../shared/components/WorkingDayHours";
import CustomText from "../shared/components/CustomText";
import { globalStyles } from "../shared/globalStyles";

const BusinessHoursScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Попълнете работно време"
      contentOffset={"8%"}
    >
      <WorkingDayHours title={"Понеделник"} style={{ marginTop: "2%" }} />
      <WorkingDayHours title={"Вторник"} />
      <WorkingDayHours title={"Сряда"} />
      <WorkingDayHours title={"Четвъртък"} />
      <WorkingDayHours title={"Петък"} />
      <WorkingDayHours title={"Събота"} />
      <WorkingDayHours title={"Неделя"} />

      <CustomText style={[globalStyles.infoTextLong, { marginTop: "2.5%" }]}>
        Тази информация ще бъде публична. Чрез нея хората ще достигат до Вас.
      </CustomText>
    </BaseAppComponent>
  );
};

export default BusinessHoursScreen;
