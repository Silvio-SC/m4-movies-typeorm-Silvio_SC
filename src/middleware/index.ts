import { validateBody } from './validateBody.middleware';
import { pagination } from './pagination.middleware';
import { nameExists } from './nameExists.middleware';
import { idExists } from './idExists.middleware';
import { handleErrors } from './handleErrors.middleware';


export default { handleErrors, idExists, nameExists, pagination, validateBody }