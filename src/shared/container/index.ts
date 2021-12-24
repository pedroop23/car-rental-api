import { container } from "tsyringe";

import { ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository} from "../../modules/cars/repositories/ISpecificationRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);
