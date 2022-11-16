import { AllCategories } from '../../Components/AllCategories/AllCategories'
import { AllRegions } from '../../Components/AllRegions/AllRegions'
import { Cars } from '../../Components/Cars/Cars'
import { CarsSecond } from '../../Components/CarsSecondSection/CarsSecond'
import { CheapUsedCars } from '../../Components/CheapUsedCars/CheapUsedCars'
import { Inspiration } from '../../Components/Inspiration/Inspiration'
import { Menu } from '../../Components/Menu/Menu'
import { UsedCarsAllBrands } from '../../Components/UsedCarsAllBrands/UsedCarsAllBrans'

export const LandingPage = () => (
  <>
    <Menu />
    <Cars />
    <Inspiration />
    <CarsSecond />
    <UsedCarsAllBrands />
    <AllCategories />
    <AllRegions />
    <CheapUsedCars />
  </>
)
