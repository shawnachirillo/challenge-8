import Vehicle from './Vehicle';
import Motorbike from './Motorbike';
import Car from './Car';
import Wheel from './Wheel';
import AbleToTow from '../interfaces/AbleToTow';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  horsepower: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    horsepower: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.horsepower = horsepower;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      const wheelArray = [];
      for (let i = 0; i < 4; ++i) {
        wheelArray.push(new Wheel());
      }
      this.wheels = wheelArray;
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const make = vehicle.make;
    const model = vehicle.model;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${make} ${model} is being towed by ${this.make} ${this.model}.`);
    } else {
      console.log(`${make} ${model} is too heavy to be towed by ${this.make} ${this.model}.`);
    }
  }

  override printDetails(): void {
    super.printDetails(); 

    console.log(`Truck Details:
    VIN: ${this.vin}
    Make: ${this.make}
    Model: ${this.model}
    Year: ${this.year}
    Weight: ${this.weight} lbs
    Horsepower: ${this.horsepower}
    Color: ${this.color}
    Towing Capacity: ${this.towingCapacity} lbs
    Wheels: ${this.wheels.length}`);
  }
}

export default Truck;
