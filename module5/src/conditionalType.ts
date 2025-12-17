

type RichPeople = {
    bike: string,
    car: string;
    ship: string;
};

type checkbhicle <T> = T extends keyof RichPeople ?  true : false;

type hasBike = checkbhicle<"bike">